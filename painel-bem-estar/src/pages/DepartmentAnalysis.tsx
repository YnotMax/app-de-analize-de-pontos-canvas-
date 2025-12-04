import React from 'react';

const DepartmentAnalysis: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Análise de Tendências de Absenteísmo Departamental</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
                Esta tela apresenta, em formato de gráfico de barras, a evolução da frequência do colaborador ao longo do tempo. É possível identificar padrões de presença e ausência, destacando momentos críticos e oferecendo insights relevantes para apoiar decisões de gestão e acompanhamento.
            </p>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="relative w-full sm:w-auto flex-grow max-w-sm">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">search</span>
                    <input className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500" placeholder="Buscar por departamento..." type="text" />
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                        <option>Filtrar por Período</option>
                        <option>Últimos 3 meses</option>
                        <option>Últimos 6 meses</option>
                        <option>Últimos 12 meses</option>
                    </select>
                    <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                        <option>Comparar por Tipo</option>
                        <option>Absenteísmo Total</option>
                        <option>Atestados Médicos</option>
                        <option>Faltas Injustificadas</option>
                        <option>Afastamentos</option>
                    </select>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 space-y-8 border border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Absenteísmo por Departamento (Últimos 12 Meses)</h2>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span><span>Atestado Médico</span></div>
                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500"></span><span>Falta Injustificada</span></div>
                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-yellow-400"></span><span>Férias/Licença</span></div>
                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500"></span><span>Outros</span></div>
                </div>

                {['Marketing', 'Vendas', 'Engenharia', 'Recursos Humanos'].map((dept, index) => (
                    <div key={dept} className="border border-slate-200 dark:border-slate-800 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4 flex items-center">
                            {dept}
                            <span className={`text-sm ml-2 ${index % 2 === 0 ? 'text-red-500' : 'text-green-500'}`}>
                                {index % 2 === 0 ? '▲' : '▼'} {(index * 5) + 2}%
                            </span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                            {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((month, mIndex) => {
                                const val1 = ((index + mIndex) * 7) % 30;
                                const val2 = ((index + mIndex) * 3) % 10;
                                const val3 = ((index + mIndex) * 2) % 10;
                                const total = (val1 + val2 + val3) / 10;
                                return (
                                    <div key={month} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                        <span className="w-16 flex-shrink-0">{month} '23</span>
                                        <div className="flex-1 h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                                            <div className="bg-red-500" style={{ width: `${val1}%` }}></div>
                                            <div className="bg-orange-500" style={{ width: `${val2}%` }}></div>
                                            <div className="bg-yellow-400" style={{ width: `${val3}%` }}></div>
                                        </div>
                                        <span className="ml-2 w-10 text-right">{total.toFixed(1)}%</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DepartmentAnalysis;
