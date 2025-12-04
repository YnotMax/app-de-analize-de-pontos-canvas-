import React from 'react';

const ExecutiveOverview: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Visão Geral de Ausências Executiva</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col justify-between border border-slate-200 dark:border-slate-700">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">Total de Dias Ausentes</h2>
                        <p className="text-3xl font-bold text-slate-900 dark:text-primary">15.3</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Mês Atual vs. Anterior</span>
                        <span className="text-red-500 flex items-center">
                            <span className="material-symbols-outlined text-sm">arrow_upward</span>
                            +2.1%
                        </span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col justify-between border border-slate-200 dark:border-slate-700">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">Impacto na Produtividade</h2>
                        <p className="text-3xl font-bold text-slate-900 dark:text-primary">82/100</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">Meta: 90</span>
                        <span className="text-green-500 flex items-center">
                            <span className="material-symbols-outlined text-sm">arrow_downward</span>
                            -0.5%
                        </span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col justify-between border border-slate-200 dark:border-slate-700">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">Duração Média das Ausências</h2>
                        <p className="text-3xl font-bold text-slate-900 dark:text-primary">1.8 Dias</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-400">vs. Último Trimestre</span>
                        <span className="text-yellow-500 flex items-center">
                            <span className="material-symbols-outlined text-sm">trending_flat</span>
                            0.0%
                        </span>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 mb-8 shadow-lg border border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-semibold mb-6">Mapa de Ausências por Departamento</h2>
                <div className="relative h-60">
                    <div className="grid grid-cols-4 gap-4 h-full">
                        <div className="flex flex-col justify-end items-center bg-green-100 dark:bg-green-900/30 p-2 rounded-md transition-all duration-300 hover:scale-105 border border-green-200 dark:border-green-800">
                            <span className="text-xs font-medium mb-1">Vendas</span>
                            <div className="h-1/4 w-full bg-green-500 rounded-md"></div>
                        </div>
                        <div className="flex flex-col justify-end items-center bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-md transition-all duration-300 hover:scale-105 border border-yellow-200 dark:border-yellow-800">
                            <span className="text-xs font-medium mb-1">Marketing</span>
                            <div className="h-1/2 w-full bg-yellow-500 rounded-md"></div>
                        </div>
                        <div className="flex flex-col justify-end items-center bg-orange-100 dark:bg-orange-900/30 p-2 rounded-md transition-all duration-300 hover:scale-105 border border-orange-200 dark:border-orange-800">
                            <span className="text-xs font-medium mb-1">Financeiro</span>
                            <div className="h-3/4 w-full bg-orange-500 rounded-md"></div>
                        </div>
                        <div className="flex flex-col justify-end items-center bg-red-100 dark:bg-red-900/30 p-2 rounded-md transition-all duration-300 hover:scale-105 border border-red-200 dark:border-red-800">
                            <span className="text-xs font-medium mb-1">Operações</span>
                            <div className="h-full w-full bg-red-500 rounded-md"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-b-lg opacity-80 mt-4 flex items-center px-2">
                        <span className="text-xs text-white font-bold drop-shadow-md">Baixo</span>
                        <span className="flex-1 text-center text-xs text-white font-bold drop-shadow-md">Moderado</span>
                        <span className="text-xs text-white font-bold drop-shadow-md">Alto</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800 dark:bg-slate-900 rounded-lg p-6 mb-8 shadow-lg border border-slate-700">
                <h2 className="text-xl font-semibold text-white mb-6">Padrões de Ausência por Horário (Últimos 3 Meses)</h2>
                <div className="flex items-end justify-around h-72 border-b border-slate-600 pb-4">
                    <div className="flex flex-col items-center w-1/4">
                        <div className="w-2/3 h-[35%] bg-primary rounded-t-lg hover:bg-blue-500 transition-colors"></div>
                        <span className="text-sm text-slate-300 mt-2">Início do Dia</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <div className="relative w-2/3 h-[70%] bg-primary rounded-t-lg hover:bg-blue-500 transition-colors group">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-200 text-slate-800 text-sm font-semibold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                50%
                            </div>
                        </div>
                        <span className="text-sm text-slate-300 mt-2">Pós-Almoço</span>
                    </div>
                    <div className="flex flex-col items-center w-1/4">
                        <div className="w-2/3 h-[30%] bg-primary rounded-t-lg hover:bg-blue-500 transition-colors"></div>
                        <span className="text-sm text-slate-300 mt-2">Saída Antecipada</span>
                    </div>
                </div>
            </div>

            <div className="relative bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 p-6 rounded-lg border border-blue-200 dark:border-blue-800/50 shadow-sm">
                <div className="flex items-start space-x-4">
                    <div className="bg-yellow-200 dark:bg-yellow-400/20 p-2 rounded-full">
                        <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-300 text-2xl">lightbulb</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">Insight Executivo:</h3>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">
                            O departamento de Operações apresenta a maior taxa de ausência. Uma investigação mais aprofundada sobre desafios específicos do departamento ou necessidades de suporte pode ser necessária para mitigar o impacto na produtividade.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveOverview;
