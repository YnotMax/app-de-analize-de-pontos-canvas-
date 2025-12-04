import React from 'react';

const PersonalDashboard: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-4xl font-semibold mb-10">Meu Painel de Bem-estar e Frequência</h1>

            <div className="relative p-8 mb-10 rounded-xl rounded-bl-3xl rounded-tr-2xl shadow-lg text-white overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-800">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg width="100%" height="100%">
                        <circle cx="0" cy="0" r="150" fill="white" opacity="0.2" />
                        <circle cx="100%" cy="100%" r="200" fill="white" opacity="0.1" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <h2 className="text-4xl font-bold mb-4">Olá, Tony!</h2>
                    <p className="text-lg mb-4 leading-relaxed">
                        Notamos um pequeno aumento de <strong className="text-yellow-200">20%</strong> nas suas ausências este mês em relação ao anterior. Tudo bem com você?
                    </p>
                    <p className="text-md opacity-90">
                        Lembre-se que sua saúde e bem-estar são prioridade. Se precisar conversar, estamos aqui.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg rounded-tl-xl rounded-br-2xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center text-primary dark:text-blue-400 mb-4">
                        <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full mr-4 shadow-sm">
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

                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg rounded-tr-xl rounded-bl-2xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center text-primary dark:text-blue-400 mb-4">
                        <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full mr-4 shadow-sm">
                            <span className="material-symbols-outlined text-2xl">event_note</span>
                        </div>
                        <h3 className="font-medium text-lg text-slate-700 dark:text-slate-200">Total de Faltas (Mês):</h3>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-bold text-slate-800 dark:text-white leading-tight">3</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg rounded-br-xl rounded-tl-2xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center text-primary dark:text-blue-400 mb-4">
                        <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-full mr-4 shadow-sm">
                            <span className="material-symbols-outlined text-2xl">pending_actions</span>
                        </div>
                        <h3 className="font-medium text-lg text-slate-700 dark:text-slate-200">Justificativas Pendentes:</h3>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-bold text-slate-800 dark:text-white leading-tight">1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDashboard;
