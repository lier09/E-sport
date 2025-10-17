
import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="print-hide fixed top-0 left-0 right-0 bg-slate-900 text-white p-2 z-50 shadow-lg border-b border-slate-700">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
                <div className="flex items-center gap-4">
                     <span className="font-bold text-green-400 flex items-center gap-2">
                        <span>🔥</span>
                        <span>Real-time Sync Active</span>
                    </span>
                    <span id="loading-status" className="text-yellow-400 font-semibold">Connected</span>
                </div>
               
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-400 whitespace-nowrap">Doc ID:</span>
                        <span id="share-id" className="font-mono text-cyan-400 bg-slate-700 px-2 py-1 rounded-md">esports-001</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-400 whitespace-nowrap">User:</span>
                        <span id="user-id" className="font-mono text-gray-300 bg-slate-700 px-2 py-1 rounded-md">local-user</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
