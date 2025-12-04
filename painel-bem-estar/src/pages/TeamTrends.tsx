import React from 'react';

const TeamTrends: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Tendências de Frequência da Equipe</h1>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8 border border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-semibold mb-4">Evolução da Frequência</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Acompanhe a evolução da frequência do colaborador ao longo do tempo.</p>

                <div className="relative bg-slate-50 dark:bg-slate-800 rounded-lg p-4 h-64 flex flex-col justify-end overflow-hidden mb-4 border border-slate-200 dark:border-slate-700">
                    <div className="absolute inset-0 flex items-end justify-around pb-2 px-4 pointer-events-none">
                        {[45, 60, 30, 70, 50, 80, 40, 65, 55, 75, 35, 60, 45, 70, 50, 80, 40, 65, 55, 75, 35, 60, 45, 70].map((height, i) => (
                            <div key={i} className="w-2 bg-primary/70 rounded-t-sm shadow-sm opacity-50" style={{ height: `${height}%` }}></div>
                        ))}
                    </div>

                    {/* Interactive Selection Area Mockup */}
                    <div className="absolute inset-x-4 bottom-0 top-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-primary/10 dark:bg-primary/30 rounded-lg h-full border-2 border-primary/50 dark:border-primary/70 relative" style={{ width: '30%' }}>
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-2 w-4 h-4 bg-primary rounded-full shadow-md"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-2 w-4 h-4 bg-primary rounded-full shadow-md"></div>
                            <div className="absolute inset-0 flex items-end justify-around pb-2 px-1">
                                <div className="w-2 h-1/3 bg-primary rounded-t-sm shadow-sm"></div>
                                <div className="w-2 h-1/2 bg-primary rounded-t-sm shadow-sm"></div>
                                <div className="w-2 h-1/4 bg-primary rounded-t-sm shadow-sm"></div>
                                <div className="w-2 h-2/3 bg-primary rounded-t-sm shadow-sm"></div>
                                <div className="w-2 h-1/3 bg-primary rounded-t-sm shadow-sm"></div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-2 left-4 text-xs text-slate-500 dark:text-slate-400">Jan 2023</div>
                    <div className="absolute bottom-2 right-4 text-xs text-slate-500 dark:text-slate-400">Dez 2023</div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Visualizar por:</label>
                        <select className="w-32 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                            <option>Mês</option>
                            <option>Semana</option>
                            <option>Dia</option>
                            <option>Trimestre</option>
                            <option>Ano</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Comparar:</label>
                        <div className="relative">
                            <select className="min-w-[200px] bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2 appearance-none">
                                <option value="">Colaborador/Departamento</option>
                                <option value="colaborator-1">Divino Sermingo</option>
                                <option value="colaborator-2">Adiana Bulias</option>
                                <option value="department-ti">Departamento TI</option>
                                <option value="department-rh">Departamento RH</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">arrow_drop_down</span>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200">
                            <span className="material-symbols-outlined text-base">add</span>
                            Adicionar
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-base">info</span>
                    Arraste colaboradores da tabela abaixo para comparar suas tendências no gráfico.
                </div>
            </div>
        </div>
    );
};

export default TeamTrends;
