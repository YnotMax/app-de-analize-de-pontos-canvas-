import React from 'react';

const TeamAnalytics: React.FC = () => {
    return (
        <div className="flex h-[calc(100vh-2rem)] overflow-hidden animate-fade-in">
            <div className="flex-1 p-8 overflow-auto">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Frequência da Equipe: Dashboard Analítico</h1>

                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8 border border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Tendências de Frequência</h2>
                            <div className="flex space-x-2">
                                <button className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white">Diário</button>
                                <button className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">Semanal</button>
                                <button className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700">Mensal</button>
                            </div>
                        </div>

                        <div className="h-80 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-end justify-around pb-4 px-4 overflow-hidden relative">
                            {/* Mockup Chart */}
                            {[30, 45, 60, 20, 75, 50, 80, 40, 65, 55, 35, 70, 25, 60, 45, 85, 50, 70, 40, 65, 55, 30, 75, 45, 60, 35, 70, 50, 80, 40].map((height, i) => (
                                <div key={i} className="w-2 bg-primary/60 rounded-t-sm hover:bg-primary transition-colors" style={{ height: `${height}%` }}></div>
                            ))}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="text-slate-400 dark:text-slate-600 text-lg font-medium opacity-20">Gráfico Interativo de Frequência</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-800">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Comparações de Equipe/Colaborador</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Comparar Equipe/Colaborador 1</label>
                                <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                                    <option>Selecione</option>
                                    <option>Equipe de TI</option>
                                    <option>Colaborador: Divino Sermingo</option>
                                    <option>Colaborador: Adiana Bulias</option>
                                </select>
                                <div className="h-40 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-end justify-around pb-2 px-2 mt-4">
                                    {[40, 60, 30, 70, 50, 80, 45, 65, 55, 35, 75, 40, 60, 50, 70].map((height, i) => (
                                        <div key={i} className="w-2 bg-blue-500/60 rounded-t-sm" style={{ height: `${height}%` }}></div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Comparar Equipe/Colaborador 2</label>
                                <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                                    <option>Selecione</option>
                                    <option>Equipe de RH</option>
                                    <option>Colaborador: Adana Marco</option>
                                    <option>Colaborador: Royenio Cormaeno</option>
                                </select>
                                <div className="h-40 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg flex items-end justify-around pb-2 px-2 mt-4">
                                    {[50, 30, 70, 40, 80, 60, 45, 75, 35, 65, 55, 40, 70, 50, 60].map((height, i) => (
                                        <div key={i} className="w-2 bg-purple-500/60 rounded-t-sm" style={{ height: `${height}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <aside className="w-72 bg-white dark:bg-slate-900 shadow-md p-6 border-l border-slate-200 dark:border-slate-800 flex flex-col space-y-6 overflow-auto h-full">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Filtros Avançados</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Departamento</label>
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                            <option>Todos os Departamentos</option>
                            <option>TI</option>
                            <option>RH</option>
                            <option>Marketing</option>
                            <option>Vendas</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Tipo de Ausência</label>
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                            <option>Todos os Tipos</option>
                            <option>Doença</option>
                            <option>Férias</option>
                            <option>Licença Médica</option>
                            <option>Outros</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Período Personalizado</label>
                        <div className="flex flex-col gap-2">
                            <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2" type="date" />
                            <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2" type="date" />
                        </div>
                    </div>
                    <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-sm">Aplicar Filtros</button>
                    <button className="w-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200">Limpar Filtros</button>
                </div>
            </aside>
        </div>
    );
};

export default TeamAnalytics;
