import React from 'react';

const IndividualTrends: React.FC = () => {
    return (
        <div className="flex h-screen overflow-hidden font-display text-slate-800 dark:text-white animate-fade-in">
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Painel de Análise Individual de Tendências</h1>

                    <div className="flex items-center justify-between bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold text-slate-500 dark:text-slate-400">DS</div>
                            <div>
                                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Divino Sermingo</h2>
                                <p className="text-slate-500 dark:text-slate-400">Desenvolvedor Frontend</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <select className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm py-2 px-3">
                                <option>Últimos 30 Dias</option>
                                <option>Última Semana</option>
                                <option>Mês Atual</option>
                                <option>Último Trimestre</option>
                                <option>Ano Atual</option>
                            </select>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm">
                                <span className="material-symbols-outlined text-base">calendar_month</span>
                                <span>Personalizar Período</span>
                            </button>
                        </div>
                    </div>

                    <section className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Tendências de Frequência</h3>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500 rounded-full"></span> Presente</span>
                                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded-full"></span> Ausente</span>
                                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-amber-500 rounded-full"></span> Férias/Folga</span>
                            </div>
                        </div>
                        <div className="w-full h-80 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-end justify-around p-4 gap-1 relative">
                            {/* Mock bars */}
                            {Array.from({ length: 30 }).map((_, i) => {
                                const height = ((i * 7) % 60) + 20 + '%';
                                const type = (i * 3) % 10;
                                let color = 'bg-blue-500';
                                if (type > 8) color = 'bg-red-500';
                                else if (type > 7) color = 'bg-amber-500';

                                return (
                                    <div key={i} className={`w-full max-w-[20px] ${color} rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer`} style={{ height }}></div>
                                )
                            })}
                        </div>
                        <div className="mt-4 flex justify-between text-sm text-slate-500 dark:text-slate-400">
                            <span>Jun 01</span>
                            <span>Jun 15</span>
                            <span>Jun 30</span>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Métricas Correlacionadas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Produtividade</h4>
                                    <div className="flex items-center text-emerald-500 text-sm font-medium">
                                        <span className="material-symbols-outlined text-base">arrow_upward</span> 5%
                                    </div>
                                </div>
                                <div className="w-full h-32 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-end justify-center p-2 gap-1">
                                    {/* Mock sparkline */}
                                    {[40, 50, 45, 60, 55, 70, 65, 80, 75, 60, 70, 85].map((h, i) => (
                                        <div key={i} className="w-2 bg-emerald-500 rounded-t-full" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Satisfação Geral</h4>
                                    <div className="flex items-center text-amber-500 text-sm font-medium">
                                        <span className="material-symbols-outlined text-base">horizontal_rule</span> 0%
                                    </div>
                                </div>
                                <div className="w-full h-32 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center relative">
                                    <div className="w-24 h-24 rounded-full border-8 border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-amber-500">75%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Conformidade</h4>
                                    <div className="flex items-center text-emerald-500 text-sm font-medium">
                                        <span className="material-symbols-outlined text-base">check_circle</span> 98%
                                    </div>
                                </div>
                                <div className="w-full h-32 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center relative">
                                    <div className="w-24 h-24 rounded-full border-8 border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-emerald-500">98%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <aside className="w-80 bg-white dark:bg-slate-900 p-6 shadow-xl overflow-y-auto border-l border-slate-200 dark:border-slate-800 hidden xl:block">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Colaboradores</h3>
                <div className="relative mb-4">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-slate-400 text-sm" placeholder="Buscar colaborador..." type="text" />
                </div>
                <div className="space-y-3">
                    {[
                        { name: 'Divino Sermingo', role: 'Dev Frontend', active: true },
                        { name: 'Adiana Bulias', role: 'Gerente Projetos', active: false },
                        { name: 'Adana Marco', role: 'Designer UX/UI', active: false },
                        { name: 'Royenio Cormaeno', role: 'Analista Dados', active: false },
                        { name: 'Jersen Sefranger', role: 'Especialista RH', active: false },
                        { name: 'Adana Rilhan', role: 'Gerente Marketing', active: false },
                    ].map((user, i) => (
                        <div key={i} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${user.active ? 'bg-blue-50 dark:bg-slate-800 ring-2 ring-blue-500' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                            <div className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">{user.name.split(' ').map(n => n[0]).join('')}</div>
                            <div>
                                <div className="font-medium text-slate-900 dark:text-white text-sm">{user.name}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">{user.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
};

export default IndividualTrends;
