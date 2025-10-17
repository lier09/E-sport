import React from 'react';
import type { ReportData } from '../types';
import Editable from './Editable';
import { ClipboardIcon } from './icons/ClipboardIcon';

interface PostureAssessmentProps {
    data: ReportData;
    onUpdate: (field: keyof ReportData, value: string) => void;
}

const PostureAssessment: React.FC<PostureAssessmentProps> = ({ data, onUpdate }) => {
    return (
        <section className="mb-10">
            <h3 className="dynamic-text-2xl font-bold text-gray-800 mb-6 flex items-center border-b-2 border-main-accent pb-2">
                <ClipboardIcon className="w-6 h-6 mr-2 text-orange-500" />
                姿势与运动功能评估 (伤病预防重点)
            </h3>

            <Editable as="h4" value={data.posture_title_1} onUpdate={(value) => onUpdate('posture_title_1', value)} className="dynamic-text-xl font-bold text-gray-700 mb-3" />
            <div className="overflow-x-auto mb-6">
                <table className="min-w-full dynamic-text-lg border-collapse">
                    <tbody>
                        <tr className="text-left text-gray-600 font-semibold">
                            <td className="p-3 border-b border-gray-300">关节</td>
                            <td className="p-3 border-b border-gray-300">前屈 (角度)</td>
                            <td className="p-3 border-b border-gray-300">后伸 (角度)</td>
                            <td className="p-3 border-b border-gray-300">侧屈 L / R (角度)</td>
                            <td className="p-3 w-1/3 border-b border-gray-300">状态与建议</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <Editable as="td" value={data.cervical_joint} onUpdate={(value) => onUpdate('cervical_joint', value)} className="p-3 font-medium" />
                            <Editable as="td" value={data.cervical_flex} onUpdate={(value) => onUpdate('cervical_flex', value)} className="p-3" />
                            <Editable as="td" value={data.cervical_ext} onUpdate={(value) => onUpdate('cervical_ext', value)} className="p-3 text-main-accent font-bold" />
                            <Editable as="td" value={data.cervical_lat} onUpdate={(value) => onUpdate('cervical_lat', value)} className="p-3" />
                            <Editable as="td" value={data.cervical_eval} onUpdate={(value) => onUpdate('cervical_eval', value)} className="p-3 dynamic-text-lg text-gray-700" />
                        </tr>
                        <tr>
                            <Editable as="td" value={data.lumbar_joint} onUpdate={(value) => onUpdate('lumbar_joint', value)} className="p-3 font-medium" />
                            <Editable as="td" value={data.lumbar_flex} onUpdate={(value) => onUpdate('lumbar_flex', value)} className="p-3 text-main-accent font-bold" />
                            <Editable as="td" value={data.lumbar_ext} onUpdate={(value) => onUpdate('lumbar_ext', value)} className="p-3 text-red-600 font-bold" />
                            <Editable as="td" value={data.lumbar_lat} onUpdate={(value) => onUpdate('lumbar_lat', value)} className="p-3" />
                            <Editable as="td" value={data.lumbar_eval} onUpdate={(value) => onUpdate('lumbar_eval', value)} className="p-3 dynamic-text-lg text-red-600" />
                        </tr>
                    </tbody>
                </table>
            </div>

            <Editable as="h4" value={data.posture_title_2} onUpdate={(value) => onUpdate('posture_title_2', value)} className="dynamic-text-xl font-bold text-gray-700 mb-3" />
            <Editable as="p" value={data.ybt_desc} onUpdate={(value) => onUpdate('ybt_desc', value)} className="text-gray-500 mb-3 dynamic-text-lg" />
            <div className="overflow-x-auto">
                 <table className="min-w-full dynamic-text-lg border-collapse">
                    <tbody>
                        <tr className="text-left text-gray-600 font-semibold">
                            <td className="p-3 border-b border-gray-300">方向</td>
                            <td className="p-3 border-b border-gray-300">左侧 (cm)</td>
                            <td className="p-3 border-b border-gray-300">右侧 (cm)</td>
                            <td className="p-3 border-b border-gray-300">差距 (cm)</td>
                            <td className="p-3 w-1/3 border-b border-gray-300">结论/风险</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <Editable as="td" value={data.ybt_ant_dir} onUpdate={(value) => onUpdate('ybt_ant_dir', value)} className="p-3 font-medium" />
                            <Editable as="td" value={data.ybt_ant_l} onUpdate={(value) => onUpdate('ybt_ant_l', value)} className="p-3" />
                            <Editable as="td" value={data.ybt_ant_r} onUpdate={(value) => onUpdate('ybt_ant_r', value)} className="p-3" />
                            <Editable as="td" value={data.ybt_ant_diff} onUpdate={(value) => onUpdate('ybt_ant_diff', value)} className="p-3 text-red-600 font-bold dynamic-text-xl" />
                            <Editable as="td" value={data.ybt_ant_risk} onUpdate={(value) => onUpdate('ybt_ant_risk', value)} className="p-3 text-red-600 font-bold" />
                        </tr>
                        <tr className="border-b border-gray-200">
                            <Editable as="td" value={data.ybt_pl_dir} onUpdate={(value) => onUpdate('ybt_pl_dir', value)} className="p-3 font-medium" />
                            <Editable as="td" value={data.ybt_pl_l} onUpdate={(value) => onUpdate('ybt_pl_l', value)} className="p-3" />
                            <Editable as="td" value={data.ybt_pl_r} onUpdate={(value) => onUpdate('ybt_pl_r', value)} className="p-3" />
                            <Editable as="td" value={data.ybt_pl_diff} onUpdate={(value) => onUpdate('ybt_pl_diff', value)} className="p-3 text-red-600 font-bold dynamic-text-xl" />
                            <Editable as="td" value={data.ybt_pl_risk} onUpdate={(value) => onUpdate('ybt_pl_risk', value)} className="p-3 text-red-600 font-bold" />
                        </tr>
                        <tr>
                            <Editable as="td" value={data.ybt_pm_dir} onUpdate={(value) => onUpdate('ybt_pm_dir', value)} className="p-3 font-medium" />
                            <Editable as="td" value={data.ybt_pm_l} onUpdate={(value) => onUpdate('ybt_pm_l', value)} className="p-3" />
                            <Editable as="td" value={data.ybt_pm_r} onUpdate={(value) => onUpdate('ybt_pm_r', value)} className="p-3" />
                            <Editable as="td" value={data.ybt_pm_diff} onUpdate={(value) => onUpdate('ybt_pm_diff', value)} className="p-3 text-yellow-600 font-bold dynamic-text-xl" />
                            <Editable as="td" value={data.ybt_pm_risk} onUpdate={(value) => onUpdate('ybt_pm_risk', value)} className="p-3 text-yellow-600" />
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PostureAssessment;