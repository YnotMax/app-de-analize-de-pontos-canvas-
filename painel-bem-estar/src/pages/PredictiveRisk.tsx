import React from 'react';

const PredictiveRisk: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-200">
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
                Predictive HR Risk Dashboard
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl">
                Proactive management of employee well-being and productivity through predictive risk assessment and tailored intervention strategies.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 bg-[#162045] p-6 rounded-lg shadow-lg border border-slate-800">
                    <h2 className="text-xl font-semibold mb-6 text-slate-100">Employee Risk Scorecard</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left table-auto">
                            <thead>
                                <tr className="border-b border-slate-700 text-slate-400 uppercase text-xs font-semibold tracking-wider">
                                    <th className="py-3 pr-2">Employee</th>
                                    <th className="py-3 px-2">Role</th>
                                    <th className="py-3 px-2 text-center">Absence Risk</th>
                                    <th className="py-3 px-2 text-center">Burnout Risk</th>
                                    <th className="py-3 px-2 text-center">Flight Risk</th>
                                    <th className="py-3 pl-2 text-center">Overall Score</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[
                                    { name: 'John Smith', role: 'Software Engineer', email: 'john.smith@example.com', absence: 'High', burnout: 'Medium', flight: 'Low', score: 8.2, scoreColor: 'text-red-400 bg-red-900/20 border-red-500' },
                                    { name: 'Jane Doe', role: 'Product Manager', email: 'jane.doe@example.com', absence: 'Medium', burnout: 'Medium', flight: 'Medium', score: 6.5, scoreColor: 'text-amber-400 bg-amber-900/20 border-amber-500' },
                                    { name: 'Maria Silva', role: 'UX Designer', email: 'maria.silva@example.com', absence: 'Low', burnout: 'Low', flight: 'Medium', score: 5.1, scoreColor: 'text-amber-400 bg-amber-900/20 border-amber-500' },
                                    { name: 'Pedro Costa', role: 'Data Scientist', email: 'pedro.costa@example.com', absence: 'Low', burnout: 'Low', flight: 'Low', score: 2.7, scoreColor: 'text-emerald-400 bg-emerald-900/20 border-emerald-500' },
                                ].map((emp, i) => (
                                    <tr key={i} className="border-b border-slate-800 hover:bg-white/5 transition-colors cursor-pointer">
                                        <td className="py-4 pr-2 flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-slate-600 mr-3 flex-shrink-0"></div>
                                            <div className="flex flex-col">
                                                <span className="font-medium text-slate-200">{emp.name}</span>
                                                <span className="text-xs text-slate-500">{emp.email}</span>
                                            </div>
                                        </td>
                                        <td className="text-slate-400">{emp.role}</td>
                                        <td className="text-center"><span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${emp.absence === 'High' ? 'bg-red-500/20 text-red-400' : emp.absence === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>{emp.absence}</span></td>
                                        <td className="text-center"><span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${emp.burnout === 'High' ? 'bg-red-500/20 text-red-400' : emp.burnout === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>{emp.burnout}</span></td>
                                        <td className="text-center"><span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${emp.flight === 'High' ? 'bg-red-500/20 text-red-400' : emp.flight === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>{emp.flight}</span></td>
                                        <td className="text-center"><span className={`inline-flex items-center rounded-full px-3 py-1 font-bold text-lg border ${emp.scoreColor}`}>{emp.score}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium mb-4 text-slate-200">Risk Score Legend:</h3>
                        <div className="grid grid-cols-3 gap-y-2 gap-x-4 text-sm text-slate-400">
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span> High Risk (7.0 - 10.0)</div>
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-amber-500 mr-2"></span> Medium Risk (4.0 - 6.9)</div>
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-emerald-500 mr-2"></span> Low Risk (0.0 - 3.9)</div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 flex flex-col space-y-8">
                    <div className="bg-[#162045] p-6 rounded-lg shadow-lg border border-slate-800 flex-1 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4 text-slate-100">Intervention Strategies for John Smith</h2>
                        <p className="text-sm text-slate-400 mb-6">Based on John's risk profile (High Absence, Medium Burnout, Low Flight Risk) and past patterns.</p>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3 bg-blue-500/20 text-blue-300 p-3 rounded-md">
                                <span className="material-symbols-outlined text-2xl">medical_services</span>
                                <div><h3 className="font-semibold text-lg">Health Support</h3><p className="text-sm">Recommend a confidential health check-up.</p></div>
                            </div>
                            <div className="flex items-center gap-3 bg-orange-500/20 text-orange-300 p-3 rounded-md">
                                <span className="material-symbols-outlined text-2xl">speed</span>
                                <div><h3 className="font-semibold text-lg">Workload Review</h3><p className="text-sm">Review current projects and prioritization.</p></div>
                            </div>
                            <div className="flex items-center gap-3 bg-purple-500/20 text-purple-300 p-3 rounded-md">
                                <span className="material-symbols-outlined text-2xl">spa</span>
                                <div><h3 className="font-semibold text-lg">Well-being Coaching</h3><p className="text-sm">Offer stress management sessions.</p></div>
                            </div>
                            <div className="flex items-center gap-3 bg-emerald-500/20 text-emerald-300 p-3 rounded-md">
                                <span className="material-symbols-outlined text-2xl">groups</span>
                                <div><h3 className="font-semibold text-lg">Team Engagement</h3><p className="text-sm">Encourage team-building participation.</p></div>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-800">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-500/20 p-2 rounded-full mr-3"><span className="material-symbols-outlined text-blue-400 text-2xl">insights</span></div>
                                <h3 className="font-bold text-lg text-slate-200">Key Insights for John:</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-slate-400 ml-2 text-sm">
                                <li><span className="text-blue-200">Absence risk spiked after deadline.</span></li>
                                <li><span className="text-red-200">Burnout factors: long hours, few breaks.</span></li>
                                <li><span className="text-emerald-200">High engagement in mentoring.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PredictiveRisk;
