import React, { useState } from 'react';
import clsx from 'clsx';

const PersonalTrends: React.FC = () => {
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

    const events = [
        { date: '03/Mai', type: 'start', icon: 'sentiment_dissatisfied', time: '09:15', label: 'Início do Expediente' },
        { date: '10/Mai', type: 'lunch', icon: 'timer_off', time: '14:30', label: 'Volta do Almoço' },
        { date: '18/Mai', type: 'end', icon: 'directions_run', time: '16:00', label: 'Saída Antecipada' },
        { date: '05/Jun', type: 'lunch', icon: 'timer_off', time: '14:15', label: 'Volta do Almoço' },
        { date: '12/Jun', type: 'start', icon: 'sentiment_dissatisfied', time: '09:30', label: 'Início do Expediente' },
        { date: '20/Jun', type: 'lunch', icon: 'timer_off', time: '14:45', label: 'Volta do Almoço' },
        { date: '01/Jul', type: 'end', icon: 'directions_run', time: '16:30', label: 'Saída Antecipada' },
        { date: '08/Jul', type: 'lunch', icon: 'timer_off', time: '14:05', label: 'Volta do Almoço' },
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'start': return 'text-red-500 dark:text-red-400';
            case 'lunch': return 'text-amber-500 dark:text-yellow-500';
            case 'end': return 'text-blue-500 dark:text-blue-400';
            default: return 'text-slate-500';
        }
    };

    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Timeline de Bem-Estar do Colaborador</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
                Esta tela apresenta a evolução da frequência do colaborador ao longo do tempo, permitindo identificar padrões de presença e ausência, destacando momentos críticos e oferecendo insights relevantes para apoiar decisões de gestão e acompanhamento.
            </p>

            <div className="bg-white dark:bg-[#020922] p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-800 relative">
                <h2 className="text-xl font-semibold text-slate-700 dark:text-white mb-6">Momentos de Ausência (Últimos 3 Meses)</h2>

                <div className="relative overflow-x-auto pb-12 scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-800">
                    <div className="relative flex items-start py-12 min-w-[1000px] xl:min-w-full border-b-2 border-dashed border-slate-300 dark:border-slate-700">
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-300 dark:bg-slate-700"></div>

                        <div className="flex justify-between w-full text-slate-500 dark:text-slate-400 text-sm absolute top-0 left-0 right-0 px-4 font-medium">
                            <span className="text-left">Maio '24</span>
                            <span className="text-center">Junho '24</span>
                            <span className="text-right">Julho '24</span>
                        </div>

                        <div className="flex justify-around w-full relative z-10 pt-4">
                            {events.map((event, index) => (
                                <div key={index} className="relative flex flex-col items-center justify-center w-1/8 group">
                                    <div className="absolute -top-10 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                                        {event.date}
                                    </div>

                                    <div
                                        className="relative cursor-pointer transition-transform hover:scale-110"
                                        onMouseEnter={() => setActiveTooltip(index.toString())}
                                        onMouseLeave={() => setActiveTooltip(null)}
                                    >
                                        <div className={clsx("p-2 rounded-full bg-white dark:bg-slate-900 border-2 shadow-sm z-20 relative",
                                            event.type === 'start' ? 'border-red-500' :
                                                event.type === 'lunch' ? 'border-amber-500' : 'border-blue-500'
                                        )}>
                                            <span className={clsx("material-symbols-outlined text-2xl", getTypeColor(event.type))}>
                                                {event.icon}
                                            </span>
                                        </div>

                                        {/* Tooltip */}
                                        <div className={clsx(
                                            "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max p-2 text-xs text-white bg-slate-800 dark:bg-slate-700 rounded-md shadow-lg transition-all duration-200 pointer-events-none z-30",
                                            activeTooltip === index.toString() ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                                        )}>
                                            {event.label}: {event.time}
                                            <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 dark:bg-slate-700 rotate-45"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center space-x-6 text-sm text-slate-600 dark:text-slate-300 flex-wrap gap-y-2">
                    <div className="flex items-center">
                        <span className="material-symbols-outlined text-red-500 dark:text-red-400 text-xl mr-2">sentiment_dissatisfied</span> Início do Expediente
                    </div>
                    <div className="flex items-center">
                        <span className="material-symbols-outlined text-amber-500 dark:text-yellow-500 text-xl mr-2">timer_off</span> Volta do Almoço
                    </div>
                    <div className="flex items-center">
                        <span className="material-symbols-outlined text-blue-500 dark:text-blue-400 text-xl mr-2">directions_run</span> Saída Antecipada
                    </div>
                </div>

                {/* Insight Overlay - Show when hovering lunch items */}
                {activeTooltip && events[parseInt(activeTooltip)].type === 'lunch' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-600 max-w-sm text-sm z-50 shadow-xl animate-fade-in">
                        <div className="flex items-start">
                            <div className="mr-4">
                                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full">
                                    <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-400">lightbulb</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800 dark:text-blue-200">Dica:</h3>
                                <p className="text-blue-700 dark:text-slate-300 mt-1">
                                    Percebemos que metade das suas ausências ocorrem após o intervalo de almoço. Que tal tentar uma pausa mais revigorante ou conversar com seu gestor sobre flexibilidade? Cuidar da energia é fundamental!
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PersonalTrends;
