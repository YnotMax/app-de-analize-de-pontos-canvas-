import React, { useState } from 'react';

const CsvImportWizard: React.FC = () => {
    const [step, setStep] = useState(1);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-3xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white h-full flex flex-col justify-center">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800">
                <h1 className="text-3xl font-bold mb-6 text-center">Assistente de Importação CSV</h1>

                {step === 1 && (
                    <div className="flex flex-col items-center justify-center text-center animate-fade-in">
                        <span className="material-symbols-outlined text-6xl text-primary mb-4">file_upload</span>
                        <h2 className="text-2xl font-semibold mb-2">1. Selecione seu arquivo CSV</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Comece arrastando e soltando seu arquivo aqui, ou selecione-o do seu computador.</p>

                        <div
                            className={`w-full max-w-xl text-center border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center transition-all cursor-pointer ${file ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-primary/50 hover:border-primary hover:bg-blue-50/50 dark:hover:bg-primary/10'}`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <span className="material-symbols-outlined text-7xl text-primary mb-4">{file ? 'check_circle' : 'cloud_upload'}</span>
                            <p className="text-xl font-medium text-slate-700 dark:text-slate-300">{file ? file.name : 'Arraste e solte seu arquivo CSV aqui'}</p>
                            {!file && (
                                <>
                                    <span className="text-slate-500 dark:text-slate-400 my-4 text-lg font-medium">ou</span>
                                    <label className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors text-lg shadow-md cursor-pointer">
                                        Selecionar Arquivo
                                        <input type="file" accept=".csv" className="hidden" onChange={handleFileChange} />
                                    </label>
                                </>
                            )}
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">Processamento local e seguro. Seus dados não saem do navegador.</p>
                        </div>

                        <div className="mt-8 flex justify-end w-full">
                            <button
                                onClick={() => setStep(2)}
                                disabled={!file}
                                className={`flex items-center bg-primary text-white font-semibold py-3 px-8 rounded-xl transition-colors text-lg shadow-md ${!file ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                            >
                                Próximo <span className="material-symbols-outlined ml-2 text-xl">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="flex flex-col items-center justify-center text-center animate-fade-in">
                        <span className="material-symbols-outlined text-6xl text-primary mb-4">table_chart</span>
                        <h2 className="text-2xl font-semibold mb-2">2. Visualize e Ajuste seu Modelo CSV</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">Confira se as colunas estão corretas e faça ajustes antes de importar.</p>

                        <div className="w-full max-w-full overflow-x-auto bg-slate-50 dark:bg-slate-800 rounded-lg p-4 shadow-inner border border-slate-200 dark:border-slate-700">
                            <table className="w-full text-left table-auto text-slate-700 dark:text-slate-200">
                                <thead>
                                    <tr className="bg-slate-200 dark:bg-slate-700">
                                        <th className="px-4 py-2 font-semibold text-sm">Nome</th>
                                        <th className="px-4 py-2 font-semibold text-sm">Data</th>
                                        <th className="px-4 py-2 font-semibold text-sm">Entrada</th>
                                        <th className="px-4 py-2 font-semibold text-sm">Saída</th>
                                        <th className="px-4 py-2 font-semibold text-sm">Justificativa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: 'Marcos', date: '2023-01-02', in: '08:00', out: '18:00', just: 'Justificado' },
                                        { name: 'Maria', date: '2023-01-01', in: '12:00', out: '18:00', just: 'Justificado' },
                                        { name: 'João', date: '2023-11-01', in: '08:00', out: '18:00', just: 'Justificado' },
                                        { name: 'Ana', date: '2023-11-01', in: '15:00', out: '18:00', just: 'Justificado' },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="px-4 py-2 text-sm">{row.name}</td>
                                            <td className="px-4 py-2 text-sm">{row.date}</td>
                                            <td className="px-4 py-2 text-sm">{row.in}</td>
                                            <td className="px-4 py-2 text-sm">{row.out}</td>
                                            <td className="px-4 py-2 text-sm">{row.just}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">Os dados acima são um exemplo. Seu arquivo será carregado aqui após a seleção.</p>

                        <div className="mt-8 flex justify-between w-full">
                            <button
                                onClick={() => setStep(1)}
                                className="flex items-center bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-white font-semibold py-3 px-8 rounded-xl transition-colors text-lg shadow-md"
                            >
                                <span className="material-symbols-outlined mr-2 text-xl">arrow_back</span> Anterior
                            </button>
                            <button className="flex items-center bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors text-lg shadow-md">
                                Finalizar Importação <span className="material-symbols-outlined ml-2 text-xl">check_circle</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CsvImportWizard;
