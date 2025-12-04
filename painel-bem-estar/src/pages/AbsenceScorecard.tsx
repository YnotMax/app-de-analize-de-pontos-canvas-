import React from 'react';

const AbsenceScorecard: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-10 tracking-tight">Scorecard de Gestão de Ausências</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg flex flex-col items-center justify-center border border-slate-200 dark:border-slate-800">
                    <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Pontuação Geral de Presença</h2>
                    <div className="relative w-72 h-72">
                        <div className="absolute inset-0 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                        {/* Conic Gradient Mockup using CSS */}
                        <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#EF4444 0% 15%, #FACC15 15% 40%, #6366f1 40% 80%, #22C55E 80% 100%)' }}>
                            <div className="absolute inset-4 sm:inset-6 bg-white dark:bg-slate-900 rounded-full flex flex-col items-center justify-center space-y-1">
                                <span className="text-5xl font-extrabold text-slate-900 dark:text-white">85%</span>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Taxa de Presença</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mt-8 text-sm font-medium">
                        <div className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                            <span className="text-slate-700 dark:text-slate-300">Saída Antecipada (15%)</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                            <span className="text-slate-700 dark:text-slate-300">Início do Expediente (25%)</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
                            <span className="text-slate-700 dark:text-slate-300">Volta do Almoço (40%)</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                            <span className="text-slate-700 dark:text-slate-300">Sem Incidentes (20%)</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg flex flex-col justify-between border border-slate-200 dark:border-slate-800">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Insights Principais</h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-lg">
                            Este scorecard fornece uma visão proativa dos padrões de assiduidade. Identificamos uma tendência recorrente: <strong className="text-indigo-600 dark:text-indigo-400">40% das ausências recentes ocorrem após o intervalo de almoço.</strong>
                            Isso sugere a necessidade de uma estratégia de retorno ao trabalho ou uma discussão sobre níveis de energia e flexibilidade.
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                            A taxa geral de presença está em <strong className="text-green-600 dark:text-green-400">85%</strong>, o que é aceitável, mas intervenções direcionadas podem melhorar a produtividade.
                        </p>
                    </div>

                    <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg">
                        <div className="flex items-start mb-4">
                            <span className="material-symbols-outlined text-3xl mr-3 opacity-90">task_alt</span>
                            <h3 className="font-bold text-2xl">Ação Recomendada:</h3>
                        </div>
                        <p className="text-lg mb-4 opacity-95">
                            Com base no padrão pós-almoço, considere agendar um acompanhamento breve e de apoio. Discuta estratégias para pausas mais revigorantes ou opções de horário flexível.
                        </p>
                        <div className="flex space-x-4">
                            <button className="px-5 py-2 bg-white text-indigo-600 rounded-lg font-semibold shadow hover:bg-slate-100 transition-colors flex items-center">
                                <span className="material-symbols-outlined text-base mr-2">calendar_month</span> Agendar Reunião
                            </button>
                            <button className="px-5 py-2 bg-transparent border-2 border-white text-white rounded-lg font-semibold shadow hover:bg-white/20 transition-colors flex items-center">
                                <span className="material-symbols-outlined text-base mr-2">flag</span> Definir Meta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbsenceScorecard;
