import React from 'react';

const WellbeingCheckin: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-4xl font-semibold mb-10">Analisador Detalhado de Tendências</h1>

            <div className="bg-white dark:bg-slate-800 p-8 mb-10 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="material-symbols-outlined mr-3 text-secondary dark:text-primary text-3xl">bar_chart</span>
                    Tendências de Ausência (Últimos 3 Meses)
                </h2>

                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium w-24 text-right text-slate-600 dark:text-slate-300">Mês 3</span>
                        <div className="flex-1 bg-slate-100 dark:bg-slate-900 rounded-full h-8 flex overflow-hidden shadow-inner">
                            <div className="bg-gradient-to-r from-green-300 to-green-500 h-full w-[40%] flex items-center justify-center text-white text-xs font-semibold px-2">4h</div>
                            <div className="bg-gradient-to-r from-blue-200 to-blue-400 h-full w-[25%] flex items-center justify-center text-white text-xs font-semibold px-2">2.5h</div>
                            <div className="flex-1"></div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium w-24 text-right text-slate-600 dark:text-slate-300">Mês 2</span>
                        <div className="flex-1 bg-slate-100 dark:bg-slate-900 rounded-full h-8 flex overflow-hidden shadow-inner">
                            <div className="bg-gradient-to-r from-green-300 to-green-500 h-full w-[30%] flex items-center justify-center text-white text-xs font-semibold px-2">3h</div>
                            <div className="bg-gradient-to-r from-blue-200 to-blue-400 h-full w-[15%] flex items-center justify-center text-white text-xs font-semibold px-2">1.5h</div>
                            <div className="flex-1"></div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium w-24 text-right text-slate-600 dark:text-slate-300">Mês Atual</span>
                        <div className="flex-1 bg-slate-100 dark:bg-slate-900 rounded-full h-8 flex overflow-hidden shadow-inner">
                            <div className="bg-gradient-to-r from-green-300 to-green-500 h-full w-[50%] flex items-center justify-center text-white text-xs font-semibold px-2">5h</div>
                            <div className="bg-gradient-to-r from-blue-200 to-blue-400 h-full w-[30%] flex items-center justify-center text-white text-xs font-semibold px-2">3h</div>
                            <div className="flex-1"></div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-6 space-x-6 text-sm">
                    <div className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-gradient-to-r from-green-300 to-green-500 mr-2"></span>
                        <span className="text-slate-600 dark:text-slate-300">Início do Expediente</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-200 to-blue-400 mr-2"></span>
                        <span className="text-slate-600 dark:text-slate-300">Saída Antecipada</span>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-3 text-yellow-500 text-3xl">lightbulb</span>
                Resumo dos Insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl rounded-bl-3xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full mr-4 shadow-sm">
                            <span className="material-symbols-outlined text-2xl text-green-600 dark:text-green-400">alarm_on</span>
                        </div>
                        <h3 className="font-bold text-lg">Início do Expediente</h3>
                    </div>
                    <p className="text-md text-slate-600 dark:text-slate-300 leading-relaxed">
                        Observamos que <strong className="text-green-600 dark:text-green-400">60%</strong> das suas ausências nos últimos 3 meses ocorreram no início do expediente. Isso pode indicar dificuldades com o primeiro turno.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl rounded-tr-3xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4 shadow-sm">
                            <span className="material-symbols-outlined text-2xl text-blue-600 dark:text-blue-400">schedule</span>
                        </div>
                        <h3 className="font-bold text-lg">Saída Antecipada</h3>
                    </div>
                    <p className="text-md text-slate-600 dark:text-slate-300 leading-relaxed">
                        Aproximadamente <strong className="text-blue-600 dark:text-blue-400">40%</strong> das suas ausências estão relacionadas a saídas antecipadas, sugerindo que compromissos no final do dia podem ser um fator.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="material-symbols-outlined mr-3 text-purple-500 text-3xl">self_improvement</span>
                Recomendação de Bem-Estar
            </h2>

            <div className="relative p-8 rounded-xl rounded-bl-3xl rounded-tr-2xl shadow-lg text-slate-800 dark:text-white overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/40 border border-indigo-100 dark:border-indigo-800">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg width="100%" height="100%">
                        <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" className="text-indigo-500" fill="currentColor" />
                        </pattern>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <p className="text-lg mb-4 leading-relaxed">
                        Considerando os picos de ausência, sugerimos explorar programas de flexibilidade de horário ou iniciar o dia com uma breve rotina de bem-estar para aumentar a disposição. Se as saídas antecipadas são por compromissos importantes, podemos buscar soluções de escalonamento.
                    </p>
                    <p className="text-md opacity-90 font-medium text-indigo-600 dark:text-indigo-300">
                        Lembre-se, estamos aqui para apoiar seu equilíbrio e produtividade.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WellbeingCheckin;
