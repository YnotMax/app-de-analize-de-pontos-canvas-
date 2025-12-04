import React from 'react';

interface CreditsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreditsModal: React.FC<CreditsModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-700 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">person</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Créditos</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Desenvolvedor & Contato</p>
                </div>

                <div className="space-y-4">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Tony Max</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Operador 1 Henry Schein</p>
                    </div>

                    <div className="space-y-3 text-sm">
                        <a href="https://github.com/YnotMax?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                            <span className="material-symbols-outlined mr-3 text-xl">code</span>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/tony-max-da-silva-costa" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                            <span className="material-symbols-outlined mr-3 text-xl">work</span>
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com/tony_max_silva/" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                            <span className="material-symbols-outlined mr-3 text-xl">photo_camera</span>
                            Instagram
                        </a>
                        <div className="flex items-center text-slate-600 dark:text-slate-300 p-2">
                            <span className="material-symbols-outlined mr-3 text-xl">call</span>
                            48 99987-2966
                        </div>
                        <div className="flex items-center text-slate-600 dark:text-slate-300 p-2">
                            <span className="material-symbols-outlined mr-3 text-xl">mail</span>
                            tonymaxonline@gmail.com
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700 text-center">
                    <p className="text-xs text-slate-400">
                        Build: Alpha (Mockup)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreditsModal;
