import React from 'react';
import type { ReportData } from '../types';
import Editable from './Editable';
import { HeartIcon } from './icons/HeartIcon';

interface HealthMonitorProps {
    data: ReportData;
    onUpdate: (field: keyof ReportData, value: string) => void;
}

const HealthMonitor: React.FC<HealthMonitorProps> = ({ data, onUpdate }) => {
    return (
        <section className="mb-10">
            <h3 className="dynamic-text-2xl font-bold text-gray-800 mb-6 flex items-center border-b-2 border-main-accent pb-2">
                <HeartIcon className="w-6 h-6 mr-2 text-red-600" />
                身体机能与健康监测
            </h3>

            <Editable as="h4" value={data.health_title_1} onUpdate={(value) => onUpdate('health_title_1', value)} className="dynamic-text-xl font-bold text-gray-700 mb-3" />
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6 dynamic-text-lg">
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-gray-300">身高/体重: <Editable value={data.bmi_value} onUpdate={(value) => onUpdate('bmi_value', value)} className="font-bold text-gray-800" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-main-accent">腰围 (WC): <Editable value={data.wc_value} onUpdate={(value) => onUpdate('wc_value', value)} className="font-bold text-main-accent" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-main-accent">臀围 (HC): <Editable value={data.hc_value} onUpdate={(value) => onUpdate('hc_value', value)} className="font-bold text-main-accent" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-main-accent">体型评估: <Editable value={data.body_eval} onUpdate={(value) => onUpdate('body_eval', value)} className="font-bold text-main-accent" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-main-accent">腰臀比 (WHR): <Editable value={data.whr_value} onUpdate={(value) => onUpdate('whr_value', value)} className="font-bold text-main-accent" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-main-accent">WHR 评估: <Editable value={data.whr_eval} onUpdate={(value) => onUpdate('whr_eval', value)} className="font-bold text-main-accent" /></div>
            </div>

            <Editable as="h4" value={data.health_title_2} onUpdate={(value) => onUpdate('health_title_2', value)} className="dynamic-text-xl font-bold text-gray-700 mb-3" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 dynamic-text-lg">
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-yellow-500">静息心率 (HR): <Editable value={data.hr_value} onUpdate={(value) => onUpdate('hr_value', value)} className="font-bold text-yellow-600" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-yellow-500">HR 建议: <Editable value={data.hr_advice} onUpdate={(value) => onUpdate('hr_advice', value)} className="dynamic-text-lg text-yellow-600" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-main-accent">血压 (SBP/DBP): <Editable value={data.bp_value} onUpdate={(value) => onUpdate('bp_value', value)} className="font-bold text-main-accent" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-main-accent">用力肺活量 (FVC): <Editable value={data.fvc_value} onUpdate={(value) => onUpdate('fvc_value', value)} className="font-bold text-main-accent" /></div>
            </div>

            <Editable as="h4" value={data.health_title_3} onUpdate={(value) => onUpdate('health_title_3', value)} className="dynamic-text-xl font-bold text-gray-700 mb-3" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dynamic-text-lg">
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-gray-300">握力 (优势手): <Editable value={data.grip_value} onUpdate={(value) => onUpdate('grip_value', value)} className="font-bold text-gray-800" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-gray-300">握力评估: <Editable value={data.grip_eval} onUpdate={(value) => onUpdate('grip_eval', value)} className="dynamic-text-lg text-gray-700" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-gray-300">纵跳高度: <Editable value={data.jump_value} onUpdate={(value) => onUpdate('jump_value', value)} className="font-bold text-gray-800" /></div>
                <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-gray-300">纵跳评估: <Editable value={data.jump_eval} onUpdate={(value) => onUpdate('jump_eval', value)} className="dynamic-text-lg text-gray-700" /></div>
            </div>
        </section>
    );
};

export default HealthMonitor;