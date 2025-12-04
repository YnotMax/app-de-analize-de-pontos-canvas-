import React, { useState } from 'react';

const CollaboratorTrends: React.FC = () => {
    const [activeBar, setActiveBar] = useState<number | null>(null);

    const monthlyData = [
        { month: 'Jan', value: 9 },
        { month: 'Fev', value: 11 },
        { month: 'Mar', value: 13 },
        { month: 'Abr', value: 8 },
        { month: 'Mai', value: 14 },
        { month: 'Jun', value: 12 },
        { month: 'Jul', value: 10 },
        { month: 'Ago', value: 16 },
        { month: 'Set', value: 9 },
        { month: 'Out', value: 11 },
        { month: 'Nov', value: 13 },
        { month: 'Dez', value: 8 },
    ];

    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Tendências de Frequência do Colaborador</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-center mb-0 gap-4">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2">
                            <option>Todos os Departamentos</option>
                            <option>TI</option>
                            <option>RH</option>
                            <option>Marketing</option>
                        </select>
                        <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2">
                            <option>Todos os Tipos de Ausência</option>
                            <option>Doença</option>
                            <option>Férias</option>
                            <option>Licença</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <span className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">Período:</span>
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Ano</button>
                        <button className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Mês</button>
                        <button className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Semana</button>
                        <button className="px-3 py-1 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Dia</button>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500">bar_chart</span>
                    Evolução da Frequência (Absenteísmo % Anual)
                    <span className="ml-auto text-sm text-slate-500 dark:text-slate-400 font-normal">(Clique nas barras para detalhar)</span>
                </h2>

                <div className="h-80 flex items-end justify-around border-b border-l border-slate-200 dark:border-slate-700 pb-2 pl-2 relative">
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between items-end text-xs text-slate-500 dark:text-slate-400 pr-2" style={{ transform: 'translateX(-100%)' }}>
                        <span>20%</span><span>15%</span><span>10%</span><span>5%</span><span>0%</span>
                    </div>

                    <div className="flex flex-grow justify-evenly items-end h-full relative w-full">
                        {/* Trend Line SVG Overlay */}
                        <div className="absolute inset-0 pointer-events-none z-0">
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <polyline
                                    fill="none"
                                    points="4,91 12,89 20,87 28,92 36,86 44,88 52,90 60,84 68,91 76,89 84,87 92,92"
                                    stroke="#ef4444"
                                    strokeWidth="0.5"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </div>

                        {monthlyData.map((data, index) => (
                            <div
                                key={index}
                                className="w-[5%] bg-blue-400/70 dark:bg-blue-600/70 rounded-t-sm relative cursor-pointer group hover:bg-blue-500 dark:hover:bg-blue-700 transition-colors duration-200 z-10"
                                style={{ height: `${data.value * 5}%` }}
                                onClick={() => setActiveBar(index)}
                            >
                                <span className={`absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none ${activeBar === index ? 'opacity-100' : ''}`}>
                                    {data.month}: {data.value}%
                                </span>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-600 dark:text-slate-400">{data.month}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-purple-500">insights</span>
                    Painel de Insights Correlacionados
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Selecione métricas adicionais para cruzar com as tendências de frequência.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Métricas de Desempenho</h3>
                        <div className="space-y-2">
                            <label className="flex items-center text-slate-700 dark:text-slate-300 cursor-pointer">
                                <input className="form-checkbox text-blue-600 rounded focus:ring-blue-500 h-4 w-4" type="checkbox" />
                                <span className="ml-2">Produtividade Média</span>
                            </label>
                            <label className="flex items-center text-slate-700 dark:text-slate-300 cursor-pointer">
                                <input className="form-checkbox text-blue-600 rounded focus:ring-blue-500 h-4 w-4" type="checkbox" />
                                <span className="ml-2">Metas Atingidas</span>
                            </label>
                            <label className="flex items-center text-slate-700 dark:text-slate-300 cursor-pointer">
                                <input className="form-checkbox text-blue-600 rounded focus:ring-blue-500 h-4 w-4" type="checkbox" />
                                <span className="ml-2">Qualidade do Trabalho</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Métricas de Engajamento & Bem-estar</h3>
                        <div className="space-y-2">
                            <label className="flex items-center text-slate-700 dark:text-slate-300 cursor-pointer">
                                <input defaultChecked className="form-checkbox text-blue-600 rounded focus:ring-blue-500 h-4 w-4" type="checkbox" />
                                <span className="ml-2">Engajamento de Equipe</span>
                                <span className="w-2 h-2 ml-2 rounded-full bg-red-500"></span>
                            </label>
                            <label className="flex items-center text-slate-700 dark:text-slate-300 cursor-pointer">
                                <input className="form-checkbox text-blue-600 rounded focus:ring-blue-500 h-4 w-4" type="checkbox" />
                                <span className="ml-2">Pesquisas de Clima</span>
                            </label>
                            <label className="flex items-center text-slate-700 dark:text-slate-300 cursor-pointer">
                                <input className="form-checkbox text-blue-600 rounded focus:ring-blue-500 h-4 w-4" type="checkbox" />
                                <span className="ml-2">Satisfação do Colaborador</span>
                            </label>
                        </div>
                    </div>
                </div>

                <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-base">auto_awesome</span>
                    Gerar Insights Estratégicos
                </button>
            </div>
        </div>
    );
};

export default CollaboratorTrends;
