import React from 'react';

const PersonalScorecard: React.FC = () => {

    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Meu Scorecard de Frequência Pessoal</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col items-center justify-center text-center border border-slate-200 dark:border-slate-700">
                    <div className="p-4 bg-green-100 dark:bg-green-700/30 rounded-full mb-4">
                        <span className="material-symbols-outlined text-green-600 dark:text-green-300 !text-5xl">local_fire_department</span>
                    </div>
                    <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">Sequência Semanal Ativa</h2>
                    <p className="text-5xl font-bold text-primary dark:text-blue-400">8</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Semanas consecutivas sem atrasos ou faltas!</p>
                </div>

                <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-semibold mb-6">Meus Momentos de Ausência (Últimos 3 Meses)</h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">Pontos que podemos melhorar para aumentar sua presença:</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="flex flex-col items-center text-center p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-700/20">
                            <div className="relative w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-blue-600 dark:text-blue-300 !text-3xl">schedule</span>
                                <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">2</span>
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Início do Expediente</span>
                        </div>

                        <div className="flex flex-col items-center text-center p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-700/20">
                            <div className="relative w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-blue-600 dark:text-blue-300 !text-3xl">lunch_dining</span>
                                <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">5</span>
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Volta do Almoço</span>
                        </div>

                        <div className="flex flex-col items-center text-center p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-700/20">
                            <div className="relative w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-blue-600 dark:text-blue-300 !text-3xl">exit_to_app</span>
                                <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">1</span>
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Saída Antecipada</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 p-6 rounded-lg border border-blue-200 dark:border-blue-800/50 shadow-sm">
                <div className="flex items-start space-x-4">
                    <div className="bg-yellow-200 dark:bg-yellow-400/20 p-2 rounded-full">
                        <span className="material-symbols-outlined text-yellow-500 dark:text-yellow-300 !text-2xl">lightbulb</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">Dica de Bem-Estar & Produtividade do Dia:</h3>
                        <p className="text-slate-600 dark:text-slate-300 mt-1">
                            Para aumentar sua energia e foco após o almoço, tente fazer uma pequena caminhada ou alongamento por 10 minutos. Isso pode reduzir o cansaço e melhorar sua disposição!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalScorecard;
