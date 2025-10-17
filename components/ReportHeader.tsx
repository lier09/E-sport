import React from 'react';
import type { ReportData } from '../types';
import Editable from './Editable';

interface ReportHeaderProps {
    data: ReportData;
    onUpdate: (field: keyof ReportData, value: string) => void;
}

const ReportHeader: React.FC<ReportHeaderProps> = ({ data, onUpdate }) => {
    return (
        <header className="text-center mb-12">
            <Editable 
                as="h1" 
                value={data.title} 
                onUpdate={(value) => onUpdate('title', value)} 
                className="dynamic-text-4xl sm:dynamic-text-5xl font-black text-main-accent mb-2 tracking-wider"
            />
            <h2 className="dynamic-text-2xl font-semibold text-gray-700">
                <Editable 
                    as="span"
                    value={data.subtitle}
                    onUpdate={(value) => onUpdate('subtitle', value)}
                />
                <Editable 
                    as="span"
                    value={data.player_name}
                    onUpdate={(value) => onUpdate('player_name', value)}
                />
            </h2>
            <Editable
                as="p"
                value={data.date_info}
                onUpdate={(value) => onUpdate('date_info', value)}
                className="text-gray-500 mt-2 dynamic-text-lg"
            />
        </header>
    );
};

export default ReportHeader;