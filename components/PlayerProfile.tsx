import React from 'react';
import type { ReportData } from '../types';
import Editable from './Editable';

interface PlayerProfileProps {
    data: ReportData;
    onUpdate: (field: keyof ReportData, value: string) => void;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ data, onUpdate }) => {
    return (
        <section className="mb-10">
            <h3 className="dynamic-text-2xl font-bold text-gray-800 mb-4 border-b-2 border-main-accent pb-2">
                选手档案
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 dynamic-text-lg font-medium">
                <div className="p-3 bg-gray-100 rounded-lg">姓名: <Editable value={data.archive_name} onUpdate={(value) => onUpdate('archive_name', value)} className="text-main-accent font-bold" /></div>
                <div className="p-3 bg-gray-100 rounded-lg">出生日期: <Editable value={data.archive_dob} onUpdate={(value) => onUpdate('archive_dob', value)} className="text-main-accent font-bold whitespace-nowrap" /></div>
                <div className="p-3 bg-gray-100 rounded-lg">年龄: <Editable value={data.archive_age} onUpdate={(value) => onUpdate('archive_age', value)} className="text-main-accent font-bold" /></div>
                <div className="p-3 bg-gray-100 rounded-lg">游戏项目: <Editable value={data.archive_game} onUpdate={(value) => onUpdate('archive_game', value)} className="text-main-accent font-bold" /></div>
            </div>
        </section>
    );
};

export default PlayerProfile;