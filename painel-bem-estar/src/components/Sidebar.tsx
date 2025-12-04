import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import CreditsModal from './CreditsModal';

const Sidebar: React.FC = () => {
    const [isCreditsOpen, setIsCreditsOpen] = useState(false);

    const navItems = [
        // Priority Items
        { path: '/department-analysis', icon: 'domain', label: 'Análise de Tendências de Absenteísmo Departamental' },
        { path: '/hr-analytics', icon: 'query_stats', label: 'HR Command Center: Análise de Frequência' },
        { path: '/absence-analysis', icon: 'bar_chart', label: 'Analisador Detalhado de Tendências' },
        { path: '/team-detailed', icon: 'compare_arrows', label: 'Comparação Dinâmica de Frequência' },
        { path: '/employee-history', icon: 'history', label: 'Timeline de Bem-Estar do Colaborador' },
        { path: '/personal-scorecard', icon: 'score', label: 'Meu Scorecard de Frequência Pessoal' },
        { path: '/manager', icon: 'dashboard', label: 'Visão de Gestor Rápida' },
        { path: '/personal-dashboard', icon: 'person', label: 'Meu Painel de Bem-estar e Frequência' },
        { path: '/forensics', icon: 'analytics', label: 'Absence Forensics Workbench' },
        { path: '/executive', icon: 'monitoring', label: 'Visão Geral de Ausências Executiva' },
        { path: '/team', icon: 'groups', label: 'Visão Geral da Equipe' },

        // Remaining Items
        { path: '/', icon: 'home', label: 'Home' },
        { path: '/team-list', icon: 'list', label: 'Team List' },
        { path: '/team-trends', icon: 'trending_up', label: 'Team Trends' },
        { path: '/personal-trends', icon: 'timeline', label: 'Personal Trends' },
        { path: '/wellbeing', icon: 'self_improvement', label: 'Wellbeing' },
        { path: '/import', icon: 'chat', label: 'Import Chat' },
        { path: '/import-wizard', icon: 'upload_file', label: 'Import Wizard' },
        { path: '/team-analytics', icon: 'insights', label: 'Team Analytics' },
        { path: '/absence-scorecard', icon: 'grade', label: 'Absence Scorecard' },
    ];

    return (
        <>
            <aside className="w-20 bg-[#0F172A] dark:bg-[#020617] p-4 flex flex-col items-center justify-between text-slate-400 h-screen fixed left-0 top-0 z-50 overflow-y-auto scrollbar-hide">
                <div className="flex flex-col items-center space-y-6 w-full">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg mb-4 flex items-center justify-center text-white font-bold flex-shrink-0" title="Build: Alpha (Mockup)">
                        HS
                    </div>

                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                clsx(
                                    "p-2 rounded-lg transition-colors duration-200 flex items-center justify-center w-12 h-12 flex-shrink-0",
                                    isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                        : "hover:bg-slate-700/50 text-slate-400 hover:text-slate-200"
                                )
                            }
                            title={item.label}
                        >
                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                        </NavLink>
                    ))}
                </div>

                <div className="flex flex-col items-center space-y-6 mt-4">
                    <button
                        onClick={() => setIsCreditsOpen(true)}
                        className="p-2 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-slate-200"
                        title="Configurações & Créditos"
                    >
                        <span className="material-symbols-outlined text-2xl">settings</span>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-slate-700/50 text-slate-400 hover:text-slate-200">
                        <span className="material-symbols-outlined text-2xl">logout</span>
                    </button>
                </div>
            </aside>

            <CreditsModal isOpen={isCreditsOpen} onClose={() => setIsCreditsOpen(false)} />
        </>
    );
};

export default Sidebar;
