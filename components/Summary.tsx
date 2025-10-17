import React from 'react';
import type { ReportData } from '../types';
import Editable from './Editable';
import { SparklesIcon } from './icons/SparklesIcon';

interface SummaryProps {
    data: ReportData;
    onUpdate: (field: keyof ReportData, value: string) => void;
}

const Summary: React.FC<SummaryProps> = ({ data, onUpdate }) => {
    return (
        <section className="bg-main-accent-light text-gray-800 p-6 rounded-lg border border-main-accent">
            <h3 className="dynamic-text-2xl font-black text-orange-500 mb-4 flex items-center">
                <SparklesIcon className="w-6 h-6 mr-2 text-orange-500" />
                【总结与干预建议】
            </h3>
            <div className="space-y-4 dynamic-text-lg">
                <div className="bg-white p-4 rounded-lg border-l-4 border-main-accent">
                    <Editable as="p" value={data.summary_advantage_title} onUpdate={(value) => onUpdate('summary_advantage_title', value)} className="font-bold dynamic-text-xl text-main-accent" />
                    <Editable as="p" value={data.summary_advantage_content} onUpdate={(value) => onUpdate('summary_advantage_content', value)} className="text-gray-700 mt-1" />
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                    <Editable as="p" value={data.summary_risk_title} onUpdate={(value) => onUpdate('summary_risk_title', value)} className="font-bold dynamic-text-xl text-red-600" />
                    <Editable as="p" value={data.summary_risk_content} onUpdate={(value) => onUpdate('summary_risk_content', value)} className="text-gray-700 mt-1" />
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-600">
                    <Editable as="p" value={data.summary_focus_title} onUpdate={(value) => onUpdate('summary_focus_title', value)} className="font-bold dynamic-text-xl text-yellow-600" />
                    <Editable as="p" value={data.summary_focus_content} onUpdate={(value) => onUpdate('summary_focus_content', value)} className="text-gray-700 mt-1" />
                </div>
            </div>
        </section>
    );
};

export default Summary;