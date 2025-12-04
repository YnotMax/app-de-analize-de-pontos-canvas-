import React from 'react';

const PersonalDashboardVariant: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-4xl font-semibold mb-10">Meu Painel de Bem-estar e Frequência</h1>

            <div className="relative p-8 mb-10 rounded-xl rounded-bl-3xl rounded-tr-2xl shadow-lg text-white overflow-hidden bg-gradient-to-br from-blue-400 to-emerald-500">
                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-4">Olá, [Nome do Colaborador]!</h2>
                    <p className="text-lg mb-4 leading-relaxed">
                        Notamos um pequeno aumento de <strong className="text-yellow-200">20%</strong> nas suas ausências este mês em relação ao anterior. Tudo bem com você?
                    </p>
                    <p className="text-md opacity-90">
                        Lembre-se que sua saúde e bem-estar são prioridade. Se precisar conversar, estamos aqui.
                    </p>
                </div>
                <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-white/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -rotate-[30deg]"></div>
                <div className="absolute bottom-[-30px] right-[-30px] w-[150px] h-[150px] bg-white/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] rotate-[20deg]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg rounded-tl-xl rounded-br-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-4">
                        <div className="p-3 bg-emerald-50 dark:bg-slate-900 rounded-full mr-4 shadow-sm">
                            <span className="material-symbols-outlined text-2xl">sentiment_neutral</span>
                        </div>
                        <h3 className="font-medium text-lg text-slate-700 dark:text-slate-200">Minha Taxa de Absenteísmo:</h3>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-bold text-slate-800 dark:text-white leading-tight">4.5%</p>
                        <p className="text-red-500 flex items-center justify-center text-md mt-2">
                            <span className="material-symbols-outlined text-xl">arrow_upward</span>
                            20%
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg rounded-tr-xl rounded-bl-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-4">
                        <div className="p-3 bg-emerald-50 dark:bg-slate-900 rounded-full mr-4 shadow-sm">
                            <span className="material-symbols-outlined text-2xl">event_note</span>
                        </div>
                        <h3 className="font-medium text-lg text-slate-700 dark:text-slate-200">Total de Faltas (Mês):</h3>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-bold text-slate-800 dark:text-white leading-tight">3</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg rounded-br-xl rounded-tl-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-4">
                        <div className="p-3 bg-emerald-50 dark:bg-slate-900 rounded-full mr-4 shadow-sm">
                            <span className="material-symbols-outlined text-2xl">pending_actions</span>
                        </div>
                        <h3 className="font-medium text-lg text-slate-700 dark:text-slate-200">Justificativas Pendentes:</h3>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-bold text-slate-800 dark:text-white leading-tight">1</p>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-8">Acompanhamento de Tendências de Frequência</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl rounded-bl-2xl rounded-tr-xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-6">Padrões de Ausência nos Últimos 3 Meses</h3>
                        <div className="relative w-full h-[250px] flex items-end mb-8 pl-10">
                            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-slate-400">
                                <span>10</span><span>7</span><span>5</span><span>2</span><span>0</span>
                            </div>
                            <div className="flex-1 h-full flex items-end justify-around relative border-l border-b border-slate-200 dark:border-slate-700">
                                <div className="flex gap-2 h-full items-end">
                                    <div className="w-8 bg-emerald-500 rounded-t-md" style={{ height: '50%' }}></div>
                                    <div className="w-8 bg-blue-400 rounded-t-md" style={{ height: '30%' }}></div>
                                    <span className="absolute -bottom-6 text-sm text-slate-500">Jan</span>
                                </div>
                                <div className="flex gap-2 h-full items-end">
                                    <div className="w-8 bg-emerald-500 rounded-t-md" style={{ height: '70%' }}></div>
                                    <div className="w-8 bg-blue-400 rounded-t-md" style={{ height: '40%' }}></div>
                                    <span className="absolute -bottom-6 text-sm text-slate-500">Fev</span>
                                </div>
                                <div className="flex gap-2 h-full items-end">
                                    <div className="w-8 bg-emerald-500 rounded-t-md" style={{ height: '80%' }}></div>
                                    <div className="w-8 bg-blue-400 rounded-t-md" style={{ height: '60%' }}></div>
                                    <span className="absolute -bottom-6 text-sm text-slate-500">Mar</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-6 mt-4 text-sm text-slate-600 dark:text-slate-400">
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-emerald-500 mr-2"></span> Início do Expediente</div>
                            <div className="flex items-center"><span className="w-4 h-4 rounded-full bg-blue-400 mr-2"></span> Saída Antecipada</div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl rounded-tr-2xl rounded-bl-xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-4">
                            <div className="p-3 bg-emerald-50 dark:bg-slate-900 rounded-full mr-4 shadow-sm">
                                <span className="material-symbols-outlined text-2xl">lightbulb</span>
                            </div>
                            <h3 className="font-bold text-xl text-slate-800 dark:text-white">Painel de Ações Sugeridas</h3>
                        </div>
                        <p className="text-md leading-relaxed mb-4 text-slate-600 dark:text-slate-300">
                            Observamos uma frequência crescente de "Início do Expediente" tardio. Pequenos ajustes podem fazer uma grande diferença!
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-slate-700 dark:text-slate-200">
                                <span className="material-symbols-outlined text-emerald-500 mr-3 text-2xl">schedule</span>
                                <span>Ajuste seu despertador para 15 minutos antes do habitual.</span>
                            </li>
                            <li className="flex items-center text-slate-700 dark:text-slate-200">
                                <span className="material-symbols-outlined text-emerald-500 mr-3 text-2xl">self_improvement</span>
                                <span>Pratique uma rotina matinal relaxante.</span>
                            </li>
                            <li className="flex items-center text-slate-700 dark:text-slate-200">
                                <span className="material-symbols-outlined text-emerald-500 mr-3 text-2xl">support</span>
                                <span>Explore nossos recursos de bem-estar.</span>
                            </li>
                        </ul>
                        <button className="mt-6 w-full bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors duration-300 shadow-md">
                            Ver Mais Recursos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDashboardVariant;
