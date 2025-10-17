import React from 'react';
import type { ReportData } from '../types';
import Editable from './Editable';
import { BoltIcon } from './icons/BoltIcon';

interface CoreMetricsProps {
    data: ReportData;
    onUpdate: (field: keyof ReportData, value: string) => void;
}

const CoreMetrics: React.FC<CoreMetricsProps> = ({ data, onUpdate }) => {
    return (
        <section className="mb-10">
            <h3 className="dynamic-text-2xl font-bold text-gray-800 mb-4 flex items-center border-b-2 border-main-accent pb-2">
                <BoltIcon className="w-6 h-6 mr-2 text-main-accent" />
                核心表现指标 (APM & 反应速度)
            </h3>
            <Editable as="p" value={data.core_desc} onUpdate={(value) => onUpdate('core_desc', value)} className="text-gray-600 mb-6 dynamic-text-lg" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-main-accent">
                    <p className="dynamic-text-xl text-gray-600">APM (按键频率)</p>
                    <Editable as="p" value={data.apm_value} onUpdate={(value) => onUpdate('apm_value', value)} className="dynamic-text-5xl font-extrabold text-main-accent my-1" />
                    <p className="dynamic-text-lg font-medium text-gray-600">次/分钟</p>
                    <Editable as="p" value={data.apm_eval} onUpdate={(value) => onUpdate('apm_eval', value)} className="mt-2 text-xs text-gray-700 font-semibold" />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-main-accent">
                    <p className="dynamic-text-xl text-gray-600">平均反应时间</p>
                    <Editable as="p" value={data.reaction_value} onUpdate={(value) => onUpdate('reaction_value', value)} className="dynamic-text-5xl font-extrabold text-main-accent my-1" />
                    <p className="dynamic-text-lg font-medium text-gray-600">秒</p>
                    <Editable as="p" value={data.reaction_eval} onUpdate={(value) => onUpdate('reaction_eval', value)} className="mt-2 text-xs text-gray-700 font-semibold" />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="dynamic-text-xl text-gray-600">鼠标操作总分</p>
                    <Editable as="p" value={data.mouse_score} onUpdate={(value) => onUpdate('mouse_score', value)} className="dynamic-text-4xl font-extrabold text-yellow-600 my-1" />
                    <p className="dynamic-text-lg font-medium text-gray-600">良好</p>
                    <p className="mt-2 text-xs text-gray-700 font-semibold">
                       <Editable as="span" value={data.mouse_eval_text} onUpdate={(value) => onUpdate('mouse_eval_text', value)} />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CoreMetrics;