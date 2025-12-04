import React from 'react';

const AbsenceAnalysis: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">HR Command Center: Análise de Frequência</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">
                Visão geral da evolução da frequência do colaborador ao longo do tempo, identificando padrões de presença e ausência para decisões de gestão proativas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">Total de Horas de Ausência por Categoria (Últimos 12 Meses)</h2>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Jane Doe</span>
                                <span className="text-sm font-semibold">120 Horas</span>
                            </div>
                            <div className="flex h-6 rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700">
                                <div className="bg-blue-600" style={{ width: '20%' }} title="Início do Expediente: 24h"></div>
                                <div className="bg-yellow-400" style={{ width: '35%' }} title="Volta do Almoço: 42h"></div>
                                <div className="bg-red-500" style={{ width: '15%' }} title="Saída Antecipada: 18h"></div>
                                <div className="bg-teal-500" style={{ width: '20%' }} title="Atestado Médico: 24h"></div>
                                <div className="bg-slate-500" style={{ width: '10%' }} title="Outros: 12h"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">John Smith</span>
                                <span className="text-sm font-semibold">85 Horas</span>
                            </div>
                            <div className="flex h-6 rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700">
                                <div className="bg-yellow-400" style={{ width: '40%' }} title="Volta do Almoço: 34h"></div>
                                <div className="bg-red-500" style={{ width: '20%' }} title="Saída Antecipada: 17h"></div>
                                <div className="bg-indigo-500" style={{ width: '30%' }} title="Férias (não planejadas): 25.5h"></div>
                                <div className="bg-slate-500" style={{ width: '10%' }} title="Outros: 8.5h"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Maria Silva</span>
                                <span className="text-sm font-semibold">50 Horas</span>
                            </div>
                            <div className="flex h-6 rounded-md overflow-hidden bg-slate-200 dark:bg-slate-700">
                                <div className="bg-blue-600" style={{ width: '30%' }} title="Início do Expediente: 15h"></div>
                                <div className="bg-teal-500" style={{ width: '50%' }} title="Atestado Médico: 25h"></div>
                                <div className="bg-red-500" style={{ width: '20%' }} title="Saída Antecipada: 10h"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-lg font-medium mb-4 text-slate-800 dark:text-white">Legenda de Categorias:</h3>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-blue-600 mr-2"></span><span>Início do Expediente</span></div>
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></span><span>Volta do Almoço</span></div>
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span><span>Saída Antecipada</span></div>
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-teal-500 mr-2"></span><span>Atestado Médico</span></div>
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-indigo-500 mr-2"></span><span>Férias (não planejadas)</span></div>
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-slate-500 mr-2"></span><span>Outros</span></div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-1 flex flex-col space-y-8">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800">
                        <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Calendário de Ausências (Últimos 3 Meses)</h2>
                        <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 mb-4">
                            <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"><span className="material-symbols-outlined text-base">chevron_left</span></button>
                            <span className="font-semibold text-lg text-slate-800 dark:text-white">Março 2024</span>
                            <button className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"><span className="material-symbols-outlined text-base">chevron_right</span></button>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-sm">
                            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                                <div key={day} className="text-slate-500 dark:text-slate-400 font-medium">{day}</div>
                            ))}
                            {Array.from({ length: 31 }).map((_, i) => {
                                const day = i + 1;
                                let bgClass = 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400';
                                if ([1, 2, 5, 6, 8, 9, 12, 13, 15, 16, 19, 21, 22, 25, 26, 27, 29].includes(day)) bgClass = 'bg-emerald-500 text-white';
                                if ([7, 20, 28].includes(day)) bgClass = 'bg-yellow-400 text-slate-900';
                                if ([14].includes(day)) bgClass = 'bg-red-500 text-white';

                                return (
                                    <div key={day} className={`w-8 h-8 rounded-sm flex items-center justify-center text-xs font-medium ${bgClass}`}>
                                        {day}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 flex-1 flex flex-col">
                        <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Resumo e Insights</h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                                <span>Total de Horas Ausentes:</span>
                                <span className="font-bold text-lg text-slate-800 dark:text-white">255h</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                                <span>Média de Ausência/Mês:</span>
                                <span className="font-bold text-lg text-slate-800 dark:text-white">21.25h</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                                <span>Dias com Ausência Parcial:</span>
                                <span className="font-bold text-lg text-yellow-500">18</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                                <span>Dias com Ausência Total:</span>
                                <span className="font-bold text-lg text-red-500">9</span>
                            </div>
                        </div>
                        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-2xl">lightbulb</span>
                                </div>
                                <h3 className="font-bold text-lg text-slate-800 dark:text-white">Dicas para Gestão:</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-2 text-sm">
                                <li>Percebemos que 45% das ausências parciais ocorrem após o almoço.</li>
                                <li>John Smith apresenta um padrão de ausências em início de semana.</li>
                                <li>A equipe B demonstra as menores taxas de ausência.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbsenceAnalysis;
