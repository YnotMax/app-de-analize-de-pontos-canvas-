import React from 'react';

const AbsenceForensics: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in text-text-dark-light">
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Absence Forensics Workbench</h1>
            <p className="text-lg text-text-dark-muted mb-8 max-w-3xl">
                Detailed investigation of absence incidents, identifying policy breaches, audit trails, and compliance risks for a thorough forensic analysis.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 bg-panel-dark p-6 rounded-lg shadow-lg border border-border-dark flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-text-dark-light">Event Log Table: Absence Incidents</h2>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-dark-muted">search</span>
                                <input
                                    className="pl-10 pr-4 py-2 rounded-md bg-panel-dark border border-border-dark text-sm text-text-dark-light focus:ring-primary focus:border-primary"
                                    placeholder="Search events..."
                                    type="text"
                                />
                            </div>
                            <button className="flex items-center space-x-2 px-4 py-2 rounded-md bg-primary hover:bg-blue-600 text-white text-sm font-medium transition-colors duration-200">
                                <span className="material-symbols-outlined text-base">filter_list</span>
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto -mx-6 -mt-2">
                        <table className="min-w-full divide-y divide-border-dark">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-text-dark-muted uppercase tracking-wider bg-panel-dark border-b border-border-dark w-[10%]">Employee ID</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-text-dark-muted uppercase tracking-wider bg-panel-dark border-b border-border-dark w-[15%]">Name</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-text-dark-muted uppercase tracking-wider bg-panel-dark border-b border-border-dark w-[15%]">Timestamp</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-text-dark-muted uppercase tracking-wider bg-panel-dark border-b border-border-dark w-[15%]">Category</th>
                                    <th className="px-4 py-3 text-right text-xs font-medium text-text-dark-muted uppercase tracking-wider bg-panel-dark border-b border-border-dark w-[10%]">Duration</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-text-dark-muted uppercase tracking-wider bg-panel-dark border-b border-border-dark w-[20%]">Status/Flags</th>
                                    <th className="px-4 py-3 text-right text-xs font-medium text-text-dark-muted uppercase tracking-wider bg-panel-dark border-b border-border-dark w-[15%]">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-dark/70">
                                <tr className="hover:bg-panel-dark/50 transition-colors">
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-text-dark-muted border-b border-border-dark">EMP001</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-text-dark-light border-b border-border-dark">Jane Doe</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-text-dark-light border-b border-border-dark">2024-03-14 09:30</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-text-dark-light border-b border-border-dark">Late Arrival</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-text-dark-light border-b border-border-dark text-right">0.5h</td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-text-dark-light border-b border-border-dark">
                                        <span className="flex items-center text-audit-red">
                                            <span className="material-symbols-outlined text-sm mr-1">warning</span> Policy Breach
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-text-dark-light border-b border-border-dark text-right">
                                        <button className="text-primary hover:underline text-sm">Drill Down</button>
                                    </td>
                                </tr>
                                {/* More rows... */}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="lg:col-span-1 flex flex-col space-y-8">
                    <div className="bg-panel-dark p-6 rounded-lg shadow-lg border border-border-dark">
                        <h2 className="text-xl font-semibold mb-4 text-text-dark-light">Violation Heatmap</h2>
                        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
                            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                                <div key={day} className="text-text-dark-muted font-medium">{day}</div>
                            ))}
                            {/* Heatmap cells - simplified for React */}
                            {Array.from({ length: 31 }).map((_, i) => {
                                const day = i + 1;
                                let colorClass = "bg-gray-700 text-text-dark-muted/50"; // Default/None
                                if ([12, 20, 27].includes(day)) colorClass = "bg-accent-red/30 text-accent-red border border-red-500"; // High
                                if ([13, 28].includes(day)) colorClass = "bg-audit-red/50 text-audit-red border border-red-700"; // Critical
                                if ([5, 7, 14, 19].includes(day)) colorClass = "bg-accent-yellow/30 text-accent-yellow border border-yellow-500"; // Medium
                                if ([1, 2, 6, 8, 9, 15, 18, 21, 24, 25, 26, 29].includes(day)) colorClass = "bg-accent-green/20 text-accent-green border border-green-500"; // Low

                                return (
                                    <div key={day} className={`w-8 h-8 rounded-sm flex items-center justify-center text-xs font-medium ${colorClass}`}>
                                        {day}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 text-xs text-text-dark-muted">
                            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-accent-green mr-1"></span> Low</div>
                            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-accent-yellow mr-1"></span> Med</div>
                            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-accent-red mr-1"></span> High</div>
                        </div>
                    </div>

                    <div className="bg-panel-dark p-6 rounded-lg shadow-lg border border-border-dark flex-1">
                        <h2 className="text-xl font-semibold mb-4 text-text-dark-light">Audit Trail Flags</h2>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <span className="material-symbols-outlined text-audit-red text-2xl mr-3 mt-1">warning</span>
                                <div>
                                    <h3 className="font-bold text-lg text-audit-red">Policy Breach: Jane Doe</h3>
                                    <p className="text-sm text-text-dark-muted">Multiple late arrivals in March.</p>
                                </div>
                            </div>
                            {/* More items... */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbsenceForensics;
