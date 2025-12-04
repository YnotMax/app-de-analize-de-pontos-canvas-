import React from 'react';

const RiskMonitor: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Monitor de Riscos e Oportunidades de Absenteísmo</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md flex flex-wrap items-center gap-4">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex-shrink-0">Filtros Globais</h2>
                    <div className="flex flex-wrap gap-4 flex-grow">
                        <select className="flex-grow bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 text-sm">
                            <option>Período: Último Mês</option>
                            <option>Última Semana</option>
                            <option>Último Trimestre</option>
                            <option>Último Ano</option>
                        </select>
                        <select className="flex-grow bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 text-sm">
                            <option>Tipo de Ausência: Todas</option>
                            <option>Doença</option>
                            <option>Férias</option>
                            <option>Justificada</option>
                            <option>Injustificada</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md flex items-center justify-between">
                        <div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Taxa de Absenteísmo Total</div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">4.2%</div>
                        </div>
                        <div className="flex items-center text-red-500">
                            <span className="material-symbols-outlined text-xl">arrow_upward</span>
                            <span className="font-semibold">0.5%</span>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-lg shadow-md flex items-center justify-between">
                        <div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">Ausências Críticas (Mês)</div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">7</div>
                        </div>
                        <div className="flex items-center text-amber-500">
                            <span className="material-symbols-outlined text-xl">warning</span>
                            <span className="font-semibold">3 Novas</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Mapa de Calor de Departamentos</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {[
                            { name: 'TI', val: '1.8%', diff: '-0.2%', color: 'bg-emerald-500/80 hover:bg-emerald-500' },
                            { name: 'Marketing', val: '3.1%', diff: '+0.1%', color: 'bg-blue-500/80 hover:bg-blue-500' },
                            { name: 'Vendas', val: '5.5%', diff: '+1.2%', color: 'bg-amber-500/80 hover:bg-amber-500' },
                            { name: 'Produção', val: '7.9%', diff: '+2.5%', color: 'bg-red-500/80 hover:bg-red-500' },
                            { name: 'RH', val: '2.7%', diff: '0%', color: 'bg-blue-500/80 hover:bg-blue-500' },
                            { name: 'Financeiro', val: '2.1%', diff: '-0.5%', color: 'bg-emerald-500/80 hover:bg-emerald-500' },
                            { name: 'Logística', val: '4.8%', diff: '+0.8%', color: 'bg-amber-500/80 hover:bg-amber-500' },
                            { name: 'Atendimento', val: '6.2%', diff: '+1.5%', color: 'bg-red-500/80 hover:bg-red-500' },
                        ].map((dept, i) => (
                            <div key={i} className={`flex items-center justify-center p-4 rounded-lg text-white font-medium text-lg text-center cursor-pointer transition-all duration-300 relative overflow-hidden h-24 ${dept.color}`}>
                                <div className="z-10 flex flex-col items-center">
                                    <div className="font-bold text-lg">{dept.name}</div>
                                    <div className="text-sm font-medium">{dept.val} <span className="text-xs opacity-80">({dept.diff})</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Feed de Insights Acionáveis</h2>
                    <div className="space-y-4 max-h-[calc(100vh-25rem)] overflow-y-auto pr-2">
                        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg flex flex-col gap-2">
                            <div className="flex items-center text-red-500">
                                <span className="material-symbols-outlined mr-2 text-xl">crisis_alert</span>
                                <span className="font-bold">Risco Crítico!</span>
                            </div>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                <span className="font-semibold">Aumento de 20% no absenteísmo</span> na equipe de <span className="font-semibold">Vendas</span>.
                            </p>
                            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium mt-2">
                                <span className="material-symbols-outlined text-lg">visibility</span> Ver Detalhes
                            </button>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg flex flex-col gap-2">
                            <div className="flex items-center text-blue-500">
                                <span className="material-symbols-outlined mr-2 text-xl">lightbulb</span>
                                <span className="font-bold">Oportunidade!</span>
                            </div>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                Equipe de <span className="font-semibold">TI</span> mantém taxa baixa. Estudar práticas.
                            </p>
                            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium mt-2">
                                <span className="material-symbols-outlined text-lg">visibility</span> Ver Detalhes
                            </button>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-lg flex flex-col gap-2">
                            <div className="flex items-center text-amber-500">
                                <span className="material-symbols-outlined mr-2 text-xl">warning</span>
                                <span className="font-bold">Tendência de Risco</span>
                            </div>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                                <span className="font-semibold">3 colaboradores</span> de Logística com faltas recorrentes.
                            </p>
                            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium mt-2">
                                <span className="material-symbols-outlined text-lg">visibility</span> Ver Detalhes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskMonitor;
