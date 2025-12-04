import React from 'react';

const ManagerQuickView: React.FC = () => {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Visão de Gestor Rápida</h1>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8 border border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-semibold mb-4">Frequência da Equipe (Último Mês)</h2>
                <div className="flex items-end justify-between gap-1 h-48">
                    {days.map((day) => {
                        const isWeekend = (day % 7 === 6) || (day % 7 === 0);
                        // Deterministic pseudo-random based on day
                        const pseudoRandom = (seed: number) => {
                            const x = Math.sin(seed) * 10000;
                            return x - Math.floor(x);
                        };

                        const heightPresent = isWeekend ? 0 : (pseudoRandom(day) * 60 + 30);
                        const heightAbsent = isWeekend ? 0 : (pseudoRandom(day + 100) * 15);
                        const heightVacation = isWeekend ? 0 : (pseudoRandom(day + 200) * 5);

                        return (
                            <div key={day} className="flex-1 h-full flex flex-col justify-end items-center group relative" title={`Dia ${day}`}>
                                <div className="w-full flex-grow relative rounded-t-sm overflow-hidden">
                                    {isWeekend ? (
                                        <div className="bg-slate-200 dark:bg-slate-700 absolute bottom-0 w-full h-full"></div>
                                    ) : (
                                        <>
                                            <div className="bg-yellow-100 dark:bg-yellow-600 absolute bottom-0 w-full transition-all duration-500" style={{ height: `${heightVacation}%` }}></div>
                                            <div className="bg-red-100 dark:bg-red-500 absolute w-full transition-all duration-500" style={{ bottom: `${heightVacation}%`, height: `${heightAbsent}%` }}></div>
                                            <div className="bg-green-100 dark:bg-green-600 absolute w-full transition-all duration-500" style={{ bottom: `${heightVacation + heightAbsent}%`, height: `${heightPresent}%` }}></div>
                                        </>
                                    )}
                                </div>
                                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{day}</span>

                                {/* Tooltip */}
                                <div className="absolute bottom-full mb-2 hidden group-hover:block z-10 bg-slate-800 text-white text-xs p-2 rounded whitespace-nowrap">
                                    Dia {day}: {isWeekend ? 'Fim de Semana' : `${Math.round(heightPresent)}% Presente`}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center gap-4 mt-6 text-sm flex-wrap">
                    <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-green-200 dark:bg-green-600 mr-2"></span>
                        <span>Presente</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-red-200 dark:bg-red-500 mr-2"></span>
                        <span>Ausente</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-yellow-100 dark:bg-yellow-600 mr-2"></span>
                        <span>Férias</span>
                    </div>
                    <div className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 mr-2"></span>
                        <span>Não Aplicável</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-semibold mb-4">Previsões de Ausência (Próximos 7 dias)</h2>
                    <div className="flex items-end justify-between gap-2 h-32 mb-4">
                        {['Qui', 'Sex', 'Sáb', 'Dom', 'Seg', 'Ter', 'Qua'].map((day, index) => {
                            const isWeekend = day === 'Sáb' || day === 'Dom';
                            // Deterministic risk based on index
                            const risks = [15, 20, 0, 0, 10, 12, 25];
                            const risk = risks[index];
                            const isHighRisk = risk > 20;

                            return (
                                <div key={day} className="flex-1 h-full flex flex-col justify-end items-center group relative">
                                    <div className="w-full flex-grow relative rounded-t-sm overflow-hidden">
                                        {isWeekend ? (
                                            <div className="bg-slate-200 dark:bg-slate-700 absolute bottom-0 w-full h-full"></div>
                                        ) : (
                                            <div className={`absolute bottom-0 w-full transition-all duration-500 ${isHighRisk ? 'bg-red-400 dark:bg-red-600' : 'bg-red-200 dark:bg-red-800/50'}`} style={{ height: `${risk}%` }}></div>
                                        )}
                                    </div>
                                    <span className={`text-xs mt-1 ${isHighRisk ? 'font-bold text-red-500' : 'text-slate-500 dark:text-slate-400'}`}>{day}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mt-2">
                        <span>Próximo pico: Quarta-feira (25% previsão)</span>
                        <button className="text-primary hover:underline flex items-center">
                            Detalhes <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 flex flex-col justify-between border border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-semibold mb-4">Alertas de Justificativas Pendentes</h2>
                    <div className="space-y-3">
                        {[
                            { name: 'Divino Sermingo', count: 3, date: '15/03/2024' },
                            { name: 'Adiana Bulias', count: 2, date: '20/03/2024' },
                            { name: 'Adana Rilhan', count: 1, date: '25/03/2024' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900/30">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-amber-500 text-2xl">warning</span>
                                    <div>
                                        <div className="font-medium text-slate-900 dark:text-white">{item.count} justificativas de {item.name}</div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">Desde {item.date}</div>
                                    </div>
                                </div>
                                <button className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-sm">Verificar</button>
                            </div>
                        ))}
                    </div>
                    <button className="block text-center text-primary hover:underline mt-6 flex items-center justify-center">
                        Ver todas as justificativas pendentes <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManagerQuickView;
