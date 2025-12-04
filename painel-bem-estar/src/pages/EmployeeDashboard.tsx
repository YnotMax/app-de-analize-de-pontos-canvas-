import React from 'react';

const EmployeeDashboard: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto animate-fade-in">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8">Proactive Well-being Hub</h1>

            <div className="relative p-6 mb-8 rounded-lg border border-transparent bg-cyan-100/30 dark:bg-cyan-900/20 text-slate-700 dark:text-slate-300 overflow-hidden">
                <div
                    className="absolute inset-0 -z-10 rounded-lg"
                    style={{
                        background: 'radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.2), transparent 50%), radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.2), transparent 50%)'
                    }}
                ></div>
                <div className="relative">
                    <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Olá, Tony!</h2>
                    <p className="mb-4">
                        Notamos um pequeno aumento de <strong className="text-red-500">20%</strong> nas suas ausências este mês em relação ao anterior. Tudo bem com você?
                    </p>
                    <p className="text-sm">
                        Lembre-se que sua saúde e bem-estar são prioridade. Se precisar conversar, estamos aqui.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 mb-8">
                        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
                            <span className="material-symbols-outlined text-primary mr-2">playlist_add_check</span> Ações Pendentes
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                                <span className="material-symbols-outlined text-red-500 mr-3">warning</span>
                                <div>
                                    <p className="font-medium text-red-700 dark:text-red-300">1 Justificativa de Falta Pendente</p>
                                    <p className="text-sm text-red-600 dark:text-red-400">Envie o atestado até o dia 15/07.</p>
                                </div>
                            </div>
                            <div className="flex items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                                <span className="material-symbols-outlined text-blue-500 mr-3">event</span>
                                <div>
                                    <p className="font-medium text-blue-700 dark:text-blue-300">Consulta de Rotina Agendada</p>
                                    <p className="text-sm text-blue-600 dark:text-blue-400">Quarta-feira, 20/07 às 10:00h.</p>
                                </div>
                            </div>
                            <div className="flex items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                                <span className="material-symbols-outlined text-green-500 mr-3">lightbulb</span>
                                <div>
                                    <p className="font-medium text-green-700 dark:text-green-300">Recomendação de Bem-Estar</p>
                                    <p className="text-sm text-green-600 dark:text-green-400">Sugestão: Aula de Yoga para iniciantes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-xl text-primary mr-2">favorite_border</span>
                                    <h3 className="font-medium text-sm">Absenteísmo</h3>
                                </div>
                                <p className="text-xs">Últimos 30 dias</p>
                            </div>
                            <p className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">4.5%</p>
                            <div className="flex items-center text-red-500 text-sm mb-2">
                                <span className="material-symbols-outlined text-base">arrow_upward</span>
                                <span className="ml-1">20%</span>
                            </div>
                            <div className="h-10 w-full bg-blue-200 dark:bg-blue-700/50 rounded-lg"></div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-xl text-primary mr-2">calendar_month</span>
                                    <h3 className="font-medium text-sm">Total de Faltas</h3>
                                </div>
                                <p className="text-xs">Mês atual</p>
                            </div>
                            <p className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">3</p>
                            <div className="flex items-center text-green-500 text-sm mb-2">
                                <span className="material-symbols-outlined text-base">arrow_downward</span>
                                <span className="ml-1">10%</span>
                            </div>
                            <div className="h-10 w-full bg-green-200 dark:bg-green-700/50 rounded-lg"></div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-xl text-primary mr-2">description</span>
                                    <h3 className="font-medium text-sm">Justificativas</h3>
                                </div>
                                <p className="text-xs">Urgente</p>
                            </div>
                            <p className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">1</p>
                            <div className="flex items-center text-red-500 text-sm mb-2">
                                <span className="material-symbols-outlined text-base">error_outline</span>
                                <span className="ml-1">Ação necessária</span>
                            </div>
                            <div className="h-10 w-full bg-red-200 dark:bg-red-700/50 rounded-lg"></div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-xl text-primary mr-2">self_improvement</span>
                                    <h3 className="font-medium text-sm">Score Bem-estar</h3>
                                </div>
                                <p className="text-xs">Última avaliação</p>
                            </div>
                            <p className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">85/100</p>
                            <div className="flex items-center text-green-500 text-sm mb-2">
                                <span className="material-symbols-outlined text-base">check_circle</span>
                                <span className="ml-1">Estável</span>
                            </div>
                            <div className="h-10 w-full bg-purple-200 dark:bg-purple-700/50 rounded-lg"></div>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-xl text-primary mr-2">sentiment_satisfied_alt</span>
                                    <h3 className="font-medium text-sm">Engajamento</h3>
                                </div>
                                <p className="text-xs">Média semanal</p>
                            </div>
                            <p className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">Alto</p>
                            <div className="flex items-center text-green-500 text-sm mb-2">
                                <span className="material-symbols-outlined text-base">trending_up</span>
                                <span className="ml-1">Crescendo</span>
                            </div>
                            <div className="h-10 w-full bg-indigo-200 dark:bg-indigo-700/50 rounded-lg"></div>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-xl text-primary mr-2">local_activity</span>
                                    <h3 className="font-medium text-sm">Atividades</h3>
                                </div>
                                <p className="text-xs">Recomendadas</p>
                            </div>
                            <p className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">2</p>
                            <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-2">
                                <span className="material-symbols-outlined text-base">visibility</span>
                                <span className="ml-1">Novas</span>
                            </div>
                            <div className="h-10 w-full bg-amber-200 dark:bg-amber-700/50 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
