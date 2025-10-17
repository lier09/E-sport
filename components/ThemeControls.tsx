
import React from 'react';
import type { Theme } from '../types';

interface ThemeControlsProps {
    theme: Theme;
    onThemeChange: (theme: Theme) => void;
}

const ThemeControls: React.FC<ThemeControlsProps> = ({ theme, onThemeChange }) => {
    
    const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onThemeChange({ ...theme, fontSize: e.target.value });
    };

    const handleAccentColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onThemeChange({ ...theme, accentColor: e.target.value });
    };

    return (
        <div className="theme-controls fixed top-8 right-0 m-4 p-3 bg-white border border-gray-300 rounded-lg shadow-xl z-50 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 print-hide">
            <div className="flex items-center space-x-2">
                <label htmlFor="fontSize" className="text-sm font-medium text-gray-700 whitespace-nowrap">字体大小:</label>
                <select id="fontSize" value={theme.fontSize} onChange={handleFontSizeChange} className="p-1 border border-gray-300 rounded text-sm">
                    <option value="14">小 (14px)</option>
                    <option value="16">中 (16px)</option>
                    <option value="18">大 (18px)</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="accentColor" className="text-sm font-medium text-gray-700 whitespace-nowrap">主色调:</label>
                <select id="accentColor" value={theme.accentColor} onChange={handleAccentColorChange} className="p-1 border border-gray-300 rounded text-sm">
                    <option value="#008080">专业青 (默认)</option>
                    <option value="#2563EB">科技蓝</option>
                    <option value="#9D174D">活力红</option>
                    <option value="#5B21B6">神秘紫</option>
                </select>
            </div>
        </div>
    );
};

export default ThemeControls;
