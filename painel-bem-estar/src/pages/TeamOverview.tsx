import React from 'react';

const TeamOverview: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Tendências de Frequência do Colaborador</h1>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                        <option>Filtrar por Período</option>
                        <option>Últimos 7 dias</option>
                        <option>Últimas 4 semanas</option>
                        <option>Últimos 6 meses</option>
                    </select>
                    <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                        <option>Filtrar por Setor</option>
                        <option>TI</option>
                        <option>RH</option>
                        <option>Marketing</option>
                    </select>
                    <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                        <option>Tipo de Ausência</option>
                        <option>Médica</option>
                        <option>Pessoal</option>
                        <option>Atraso</option>
                    </select>
                </div>
                <button className="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 transition-colors duration-200">
                    <span className="material-symbols-outlined text-base">compare_arrows</span>
                    Comparar Equipes
                </button>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-2xl text-primary">bar_chart</span>
                    Evolução da Frequência
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Visualização da frequência do colaborador ao longo do tempo, com destaque para momentos críticos.</p>

                <div className="relative h-64 w-full bg-slate-50 dark:bg-slate-800 rounded-lg flex items-end justify-around p-4">
                    {/* Chart Bars */}
                    <div className="flex flex-col items-center justify-end h-full">
                        <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">85%</span>
                        <div className="w-8 bg-primary h-4/5 rounded-t-sm flex items-start justify-center relative"></div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">Seg</span>
                    </div>
                    <div className="flex flex-col items-center justify-end h-full">
                        <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">90%</span>
                        <div className="w-8 bg-primary h-[90%] rounded-t-sm relative"></div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">Ter</span>
                    </div>
                    <div className="flex flex-col items-center justify-end h-full">
                        <span className="text-xs font-semibold text-red-500 dark:text-red-400 mb-1 flex items-center gap-1">
                            55% <span className="material-symbols-outlined text-base">crisis_alert</span>
                        </span>
                        <div className="w-8 bg-red-500 h-[55%] rounded-t-sm relative"></div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">Qua</span>
                    </div>
                    <div className="flex flex-col items-center justify-end h-full">
                        <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">80%</span>
                        <div className="w-8 bg-primary h-[80%] rounded-t-sm relative"></div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">Qui</span>
                    </div>
                    <div className="flex flex-col items-center justify-end h-full">
                        <span className="text-xs font-semibold text-amber-500 dark:text-amber-400 mb-1 flex items-center gap-1">
                            65% <span className="material-symbols-outlined text-base">warning</span>
                        </span>
                        <div className="w-8 bg-amber-500 h-[65%] rounded-t-sm relative"></div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">Sex</span>
                    </div>
                    <div className="flex flex-col items-center justify-end h-full">
                        <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">95%</span>
                        <div className="w-8 bg-primary h-full rounded-t-sm relative"></div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">Sab</span>
                    </div>
                    <div className="flex flex-col items-center justify-end h-full">
                        <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">98%</span>
                        <div className="w-8 bg-primary h-[98%] rounded-t-sm relative"></div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">Dom</span>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-2xl text-amber-500">analytics</span>
                    Sumário de Tendências (Últimos 7 dias)
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Colaboradores e departamentos com tendências de absenteísmo ou queda na frequência.</p>
                <ul className="space-y-3">
                    <li className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-red-500 text-2xl">person_alert</span>
                            <div>
                                <div className="font-medium text-red-600 dark:text-red-400">Divino Sermingo</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Absenteísmo alto: 4.5% (+20% semana)</div>
                            </div>
                        </div>
                        <button className="text-primary hover:text-blue-600 font-medium text-sm flex items-center gap-1">
                            Ver Detalhes
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </button>
                    </li>
                    <li className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-900">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-amber-500 text-2xl">trending_down</span>
                            <div>
                                <div className="font-medium text-amber-600 dark:text-amber-400">Departamento de Marketing</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">Frequência em declínio: 3.8% (+15% semana)</div>
                            </div>
                        </div>
                        <button className="text-primary hover:text-blue-600 font-medium text-sm flex items-center gap-1">
                            Ver Detalhes
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl text-blue-500">groups</span>
                        Detalhes da Equipe
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Visão geral e status atual dos colaboradores.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Colaborador</th>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Taxa de Absenteísmo</th>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Total de Faltas</th>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr>
                                <td className="p-4 whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center text-slate-600 font-bold">DS</div>
                                        <div>
                                            <div className="font-medium text-slate-900 dark:text-white">Divino Sermingo</div>
                                            <div className="text-sm text-slate-500 dark:text-slate-400">Desenvolvedor</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <div className="flex items-center gap-1">
                                        <span>4.5%</span>
                                        <span className="text-red-500 flex items-center text-sm">
                                            <span className="material-symbols-outlined text-base">arrow_upward</span> 20%
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4 whitespace-nowrap">3</td>
                                <td className="p-4 whitespace-nowrap">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300">Presente</span>
                                </td>
                                <td className="p-4 whitespace-nowrap">
                                    <button className="text-slate-500 dark:text-slate-400 hover:text-primary">
                                        <span className="material-symbols-outlined">more_horiz</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeamOverview;
