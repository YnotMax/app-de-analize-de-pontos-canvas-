import React, { useState } from 'react';

const CsvImport: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white h-full flex flex-col">
            <header className="mb-8">
                <h1 className="text-3xl font-bold">Sistema de Análise de Pontos</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 h-full flex flex-col justify-center items-center text-center">
                        <div className="w-full max-w-lg">
                            <h2 className="text-2xl font-semibold mb-6">Importação de Dados CSV</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8">
                                Clique no botão abaixo para iniciar a importação em nosso assistente conversacional.
                            </p>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-primary hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-md flex items-center justify-center mx-auto gap-2"
                            >
                                <span className="material-symbols-outlined">chat</span>
                                Iniciar Importação Conversacional
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 h-full">
                        <h2 className="text-xl font-semibold mb-4">Modelo de CSV</h2>
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 font-mono text-xs text-slate-600 dark:text-slate-300 overflow-x-auto border border-slate-200 dark:border-slate-700">
                            <pre>{`Nome,Data,Entrada,Saida,Justificativa
Marcos,2023-01-02,08:00,18:00,Justificado
Maria,2023-01-01,12:00,18:00,Justificado
João,2023-11-01,08:00,18:00,Justificado
Ana,2023-11-01,15:00,18:00,Justificado`}</pre>
                        </div>
                        <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                            <p>Certifique-se de que seu arquivo segue este padrão para evitar erros durante a importação.</p>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl w-full max-w-2xl h-[calc(100vh-8rem)] flex flex-col animate-scale-in">
                        <div className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
                            <h2 className="text-2xl font-bold">Assistente de Importação CSV</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Message 1 */}
                            <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                <div className="flex-shrink-0 mr-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl text-primary">smart_toy</span>
                                    </div>
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                                    <p className="text-slate-700 dark:text-slate-200">Olá! Eu sou o seu assistente de importação de dados. Para começarmos, por favor, me envie seu arquivo CSV.</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Você pode arrastar e soltar o arquivo aqui ou selecioná-lo manualmente.</p>
                                </div>
                            </div>

                            {/* Upload Area */}
                            <div className="flex justify-end items-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                <div className="bg-blue-50 dark:bg-primary/5 p-6 rounded-lg rounded-tr-none shadow-sm max-w-[80%] text-center border-2 border-dashed border-primary/30 hover:border-primary/60 transition-colors cursor-pointer group">
                                    <span className="material-symbols-outlined text-5xl text-primary mb-3 group-hover:scale-110 transition-transform">upload_file</span>
                                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300">Arraste e solte o arquivo</p>
                                    <span className="text-slate-500 dark:text-slate-400 my-3 block">ou</span>
                                    <label className="inline-block bg-primary hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors cursor-pointer">
                                        Selecionar Arquivo
                                        <input type="file" accept=".csv" className="hidden" />
                                    </label>
                                </div>
                            </div>

                            {/* Message 2 */}
                            <div className="flex items-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                <div className="flex-shrink-0 mr-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-2xl text-primary">smart_toy</span>
                                    </div>
                                </div>
                                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                                    <p className="text-slate-700 dark:text-slate-200">Perfeito! Recebi seu arquivo. Aqui está uma prévia das primeiras linhas:</p>
                                    <div className="bg-white dark:bg-slate-950 rounded-md p-3 mt-3 text-xs font-mono overflow-x-auto border border-slate-200 dark:border-slate-700">
                                        <pre className="text-slate-700 dark:text-slate-300">{`Nome,Data,Entrada,Saida,Justificativa
Marcos,2023-01-02,08:00,18:00,Justificado
Maria,2023-01-01,12:00,18:00,Justificado`}</pre>
                                    </div>
                                    <p className="text-slate-700 dark:text-slate-200 mt-3">Os dados acima representam os cabeçalhos das colunas?</p>
                                    <div className="flex space-x-2 mt-4">
                                        <button className="bg-primary hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg transition-colors">Sim, estão corretos</button>
                                        <button className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white text-sm py-2 px-4 rounded-lg transition-colors">Não, ajustar</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex justify-end bg-slate-50 dark:bg-slate-900/50 rounded-b-lg">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-medium py-2 px-5 rounded-lg transition-colors"
                            >
                                Cancelar Importação
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CsvImport;
