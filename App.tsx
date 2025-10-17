import React, { useState, useEffect, useCallback } from 'react';
import { INITIAL_REPORT_DATA } from './constants';
import type { ReportData, Theme } from './types';
import Header from './components/Header';
import ThemeControls from './components/ThemeControls';
import ReportHeader from './components/ReportHeader';
import PlayerProfile from './components/PlayerProfile';
import CoreMetrics from './components/CoreMetrics';
import HealthMonitor from './components/HealthMonitor';
import PostureAssessment from './components/PostureAssessment';
import Summary from './components/Summary';
import { DownloadIcon } from './components/icons/DownloadIcon';

declare const html2canvas: any;
declare const jspdf: any;

const hexToRgb = (hex: string): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : '0, 128, 128'; // Fallback to default teal
};

const App: React.FC = () => {
    const [data, setData] = useState<ReportData>(INITIAL_REPORT_DATA);
    const [theme, setTheme] = useState<Theme>({
        fontSize: '16',
        accentColor: '#008080',
    });
    const [isExporting, setIsExporting] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--base-font-size', `${theme.fontSize}px`);
        root.style.setProperty('--main-accent-color', theme.accentColor);
        root.style.setProperty('--main-accent-color-rgb', hexToRgb(theme.accentColor));
    }, [theme]);
    
    const handleDataUpdate = useCallback((field: keyof ReportData, value: string) => {
        setData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    }, []);

    const exportPDF = async () => {
        const contentElement = document.getElementById('content-to-pdf');
        if (!contentElement) {
            console.error('Content element for PDF export not found!');
            return;
        }

        setIsExporting(true);
        document.body.classList.add('is-exporting-pdf');

        try {
            await new Promise(resolve => setTimeout(resolve, 100));

            const canvas = await html2canvas(contentElement, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: '#ffffff',
            });

            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = jspdf;
            
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;

            // Create a PDF where the page size is the same as the captured image.
            // This ensures the content fits on a single page without being split.
            const pdf = new jsPDF({
                orientation: canvasWidth > canvasHeight ? 'landscape' : 'portrait',
                unit: 'px',
                format: [canvasWidth, canvasHeight]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvasWidth, canvasHeight);
            pdf.save('esports-player-report.pdf');

        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("抱歉，生成PDF报告时出错，请重试。");
        } finally {
            setIsExporting(false);
            document.body.classList.remove('is-exporting-pdf');
        }
    };

    return (
        <>
            <Header />
            <ThemeControls theme={theme} onThemeChange={setTheme} />
            
            <div className="container-wrapper pt-16">
                <div className="container mx-auto p-4 sm:p-6 lg:p-10">
                    <div className="text-center mb-8 print-hide">
                        <button 
                            onClick={exportPDF}
                            disabled={isExporting}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            <DownloadIcon className="w-6 h-6 mr-2" />
                            {isExporting ? '正在生成报告...' : '导出 PDF 报告'}
                        </button>
                        <p className="text-xs text-gray-500 mt-2">
                            （点击下方数据即可编辑，更改将自动保存）
                        </p>
                    </div>

                    <div id="content-to-pdf" className="p-8 bg-white rounded-lg shadow-lg">
                        <ReportHeader data={data} onUpdate={handleDataUpdate} />
                        <PlayerProfile data={data} onUpdate={handleDataUpdate} />
                        <CoreMetrics data={data} onUpdate={handleDataUpdate} />
                        <HealthMonitor data={data} onUpdate={handleDataUpdate} />
                        <PostureAssessment data={data} onUpdate={handleDataUpdate} />
                        <Summary data={data} onUpdate={handleDataUpdate} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;