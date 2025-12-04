import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';

const ThemeSwitcher: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const themes = [
        { id: 'default', name: 'Default (Blue)', color: 'bg-blue-500' },
        { id: 'nature', name: 'Nature (Green)', color: 'bg-emerald-500' },
        { id: 'executive', name: 'Executive (Purple)', color: 'bg-indigo-500' },
        { id: 'warm', name: 'Warm (Orange)', color: 'bg-orange-500' },
    ];

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-slate-200 transition-colors"
                title="Change Theme"
            >
                <span className="material-symbols-outlined text-2xl">palette</span>
            </button>

            {isOpen && (
                <div className="absolute left-14 bottom-0 mb-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 p-2 z-50 animate-fade-in">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 px-2 uppercase tracking-wider">
                        Select Theme
                    </div>
                    <div className="space-y-1">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => {
                                    setTheme(t.id as 'default' | 'nature' | 'executive' | 'warm');
                                    setIsOpen(false);
                                }}
                                className={clsx(
                                    "w-full flex items-center px-2 py-2 text-sm rounded-md transition-colors",
                                    theme === t.id
                                        ? "bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white"
                                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                                )}
                            >
                                <span className={`w-3 h-3 rounded-full mr-3 ${t.color}`}></span>
                                {t.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThemeSwitcher;
