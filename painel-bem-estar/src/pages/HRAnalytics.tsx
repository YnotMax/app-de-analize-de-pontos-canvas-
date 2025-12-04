import React from 'react';

const HRAnalytics: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Central de Comando do Analista de RH</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg lg:col-span-2 border border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-semibold mb-4">Taxa Geral de Absenteísmo (Tendência Mensal)</h2>
                    <div className="h-48 flex items-end justify-between border-b border-slate-200 dark:border-slate-700 pb-4 text-sm text-slate-500 dark:text-slate-400">
                        {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'].map((month, index) => {
                            const height = Math.random() * 60 + 20;
                            const isHigh = height > 60;
                            return (
                                <div key={month} className="flex flex-col items-center group">
                                    <div className={`w-8 rounded-t-lg relative transition-all duration-300 ${isHigh ? 'bg-red-500/80' : 'bg-emerald-500/80'}`} style={{ height: `${height}%` }}>
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium bg-slate-800 text-white py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                            {(height / 10).toFixed(1)}%
                                        </span>
                                    </div>
                                    <span className="mt-2">{month}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg lg:col-span-2 border border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-semibold mb-4">Detalhamento por Motivo (Último Trimestre)</h2>
                    <div className="space-y-4">
                        {[
                            { label: 'Doença (Própria)', value: '35%', color: 'bg-indigo-500' },
                            { label: 'Consulta Médica', value: '25%', color: 'bg-blue-500' },
                            { label: 'Compromisso Pessoal', value: '20%', color: 'bg-cyan-500' },
                            { label: 'Emergência Familiar', value: '10%', color: 'bg-purple-500' },
                            { label: 'Outros', value: '10%', color: 'bg-pink-500' },
                        ].map((item) => (
                            <div key={item.label} className="flex items-center">
                                <div className={`w-4 h-4 rounded-full ${item.color} mr-3`}></div>
                                <div className="flex-1 text-slate-700 dark:text-slate-300">{item.label}</div>
                                <div className="font-semibold">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg md:col-span-2 xl:col-span-2 border border-slate-200 dark:border-slate-700">
                    <h2 className="text-xl font-semibold mb-4">Momentos de Ausência (Último Trimestre)</h2>
                    <div className="flex items-end justify-around h-60 border-b border-slate-200 dark:border-slate-700 pb-4">
                        <div className="flex flex-col items-center w-1/4">
                            <div className="w-2/3 h-[35%] bg-primary rounded-t-lg"></div>
                            <span className="text-sm text-slate-500 dark:text-slate-400 mt-2">Início Exp.</span>
                        </div>
                        <div className="flex flex-col items-center w-1/4">
                            <div className="relative w-2/3 h-[70%] bg-primary rounded-t-lg group">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-semibold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    50%
                                </div>
                            </div>
                            <span className="text-sm text-slate-500 dark:text-slate-400 mt-2">Volta Almoço</span>
                        </div>
                        <div className="flex flex-col items-center w-1/4">
                            <div className="w-2/3 h-[30%] bg-primary rounded-t-lg"></div>
                            <span className="text-sm text-slate-500 dark:text-slate-400 mt-2">Saída Ant.</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40 p-6 rounded-lg shadow-lg lg:col-span-full xl:col-span-2 border border-blue-100 dark:border-blue-900">
                    <div className="flex items-start space-x-4 mb-4">
                        <div className="bg-yellow-100 dark:bg-yellow-400/20 p-2 rounded-full flex-shrink-0">
                            <span className="material-symbols-outlined text-yellow-500 dark:text-yellow-300 !text-2xl">lightbulb</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-slate-800 dark:text-slate-100">Insights Acionáveis</h3>
                            <p className="text-slate-600 dark:text-slate-300 mt-1">Recomendações personalizadas para melhorar o bem-estar e produtividade da equipe.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-blue-200 dark:border-blue-800/50 shadow-sm">
                            <h4 className="font-semibold text-lg flex items-center mb-2">
                                <span className="material-symbols-outlined text-blue-500 mr-2">group</span>
                                Equipe 'Desenvolvimento'
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">
                                Aumento de ausências pós-almoço detectado. Considere implementar uma 'pausa mindfulness' de 15 minutos ou incentivar caminhadas em equipe.
                            </p>
                            <button className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 flex items-center">
                                <span className="material-symbols-outlined !text-base mr-1">arrow_right_alt</span> Ver relatório detalhado
                            </button>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-green-200 dark:border-green-800/50 shadow-sm">
                            <h4 className="font-semibold text-lg flex items-center mb-2">
                                <span className="material-symbols-outlined text-green-500 mr-2">person</span>
                                Individual: Ana P. (Marketing)
                            </h4>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">
                                Ausências frequentes de curto prazo por 'compromissos pessoais'. Um check-in confidencial pode ajudar.
                            </p>
                            <button className="mt-3 text-sm font-medium text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 flex items-center">
                                <span className="material-symbols-outlined !text-base mr-1">arrow_right_alt</span> Sugerir caminho de apoio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRAnalytics;
