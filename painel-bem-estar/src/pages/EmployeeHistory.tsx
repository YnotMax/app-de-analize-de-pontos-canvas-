import React from 'react';

const EmployeeHistory: React.FC = () => {
    const employees = [
        { name: 'Divino Sermingo', role: 'Desenvolvedor Sênior', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBSV6F5aObkZ0e89HsEZgnM7YaYPbKyuVma-kepeGmanMCQbfPzs1Q-VJ9QkFYFWn4bM6M2fgqoJzGay6OfFs5h9wW5NYO1GGbqItNDO9M1uMi6gIl0xtbH01G8pObDS33TswcFlPP7or4Mb-kc_dCKo0mjxxIWAwZLoYtXMpCzGMMbtTAZP4gx5rNT4JwrdDSIwsmd_ioOI4V6viz6QB70I01aMS8x2yo-AHwBdDAwlvULMQpU1EQj8lzI4SV3hMko-8oPUkntU' },
        { name: 'Adiana Bulias', role: 'Analista de RH', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfuLrwCEABzD2srEo_U_CjshrJ9_2loRO4btrWaEiGJbMLVFD1BwEMPK4Kho_mW2zlWBLJsWZ3iWcyD3s-7JcLuVnPKWbPhXzkRTR0MbPP0ttx9QDwat5NEfCd4woDQcXNr5f-A1VqxB9lGTmYxkEs6OyZShEGeEdoFvzdgseImdPkzHPd4Yq5rcgvjgOAgtquYuFlyNCWz91mQLCUhBXkcTt6V1MBx53bMVRWAi_Fz06kGX_ZxMicdLWBqJ6UH7qmdIKoeIvXD58', active: true },
        { name: 'Adana Marco', role: 'Gerente de Projeto', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaPet_OGJsKv4PgLl9byoCuZkh4dgluaEk61D4i9_fQ287eTe2pEVkcxiQta7Nq4oo6nEuWly56w-6VKQbg4dbzw8EeckofPaQPRUOpFRNN5ro8V9CWe7LBRq1Ky1uLTLYCU9VSOJYaceOx67MKO_aSj38xOLiCCk4xFvtp4h0TvTytb9goOlb2G2mUqmRfQ_Raa5AOl1H8FsCOEKtw0-PA_nYT8ThgAajZLTOagihwPSlzzl1Wz73zcN6lyHq0i1S5WBr-Qk3XpQ' },
        { name: 'Royenio Cormaeno', role: 'Designer UI/UX', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjx74A1jUURWLec39zCQOEviRERbNhFah6ashA1pz6rqfUmgLR_4FMGE1DtYhfpGA4EOMrWFsmoFwj02FLMrZSPs93IpCfIg7aVUByKT3iu7Beh7LzlNLu3u241-LUa0krvtJKXN8xiQGiwKutIN2tQuU-wwZeC05ZlvFZ3yayCcSvd5XYHFA_nsyVWTiPWUZOpzTVfA28GE7A2Qm84liyduwxtv5x_TfZ3qYkBW5vOMj_fh4TaX5mqtSe9Q4WrDTSOtdDD_tU8xw' },
    ];

    return (
        <div className="flex h-[calc(100vh-2rem)] overflow-hidden animate-fade-in">
            <aside className="w-80 bg-white dark:bg-slate-900 flex flex-col p-4 shadow-xl border-r border-slate-200 dark:border-slate-800 h-full">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Colaboradores</h2>
                <div className="relative mb-4">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">search</span>
                    <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 text-sm" placeholder="Buscar colaborador..." type="text" />
                </div>
                <div className="flex flex-col gap-1 overflow-y-auto flex-grow pr-2">
                    {employees.map((emp, index) => (
                        <div key={index} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors duration-200 group ${emp.active ? 'bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                            <img alt={`Avatar de ${emp.name}`} className="w-10 h-10 rounded-full object-cover" src={emp.avatar} />
                            <div>
                                <div className={`font-medium ${emp.active ? 'text-primary' : 'text-slate-900 dark:text-white group-hover:text-primary'}`}>{emp.name}</div>
                                <div className="text-sm text-slate-500 dark:text-slate-400">{emp.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            <div className="flex-1 p-8 overflow-auto">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Histórico de Frequência de Adiana Bulias</h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 text-base">
                        Visualize a evolução da frequência de Adiana Bulias ao longo do tempo. Identifique padrões de presença e ausência, destacando momentos críticos para apoiar decisões de gestão e acompanhamento.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm py-2 px-3">
                                <option>Último Ano</option>
                                <option>Últimos 6 Meses</option>
                                <option>Últimos 3 Meses</option>
                                <option>Mês Atual</option>
                            </select>
                            <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm py-2 px-3">
                                <option>Exibição Diária</option>
                                <option>Exibição Semanal</option>
                                <option>Exibição Mensal</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200 shadow-sm">
                                <span className="material-symbols-outlined text-base">download</span>
                                Exportar Dados
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8 min-h-[400px] border border-slate-200 dark:border-slate-800">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Evolução da Frequência</h3>
                        <div className="flex items-center gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-500"></span> Presente</div>
                            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-500"></span> Ausente</div>
                            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-400"></span> Férias</div>
                            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-700"></span> Ausência Crítica</div>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800 h-96 flex items-end justify-around rounded-lg border border-slate-200 dark:border-slate-700 p-4">
                            {Array.from({ length: 30 }).map((_, i) => {
                                const status = Math.random();
                                let color = 'bg-green-500';
                                if (status > 0.9) color = 'bg-red-500';
                                else if (status > 0.8) color = 'bg-yellow-400';

                                return (
                                    <div key={i} className={`w-2 rounded-t-sm ${color} opacity-80 hover:opacity-100 transition-opacity`} style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-800">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Detalhes das Ausências Críticas</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50 dark:bg-slate-800">
                                    <tr>
                                        <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Data</th>
                                        <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Tipo de Ausência</th>
                                        <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Duração</th>
                                        <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Status da Justificativa</th>
                                        <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Notas</th>
                                        <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Ações</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                    <tr>
                                        <td className="p-4 whitespace-nowrap">2023-11-15</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Médica</span></td>
                                        <td className="p-4 whitespace-nowrap">3 Dias</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">Pendente</span></td>
                                        <td className="p-4 text-sm text-slate-600 dark:text-slate-400">Licença médica (anexo pendente)</td>
                                        <td className="p-4 whitespace-nowrap">
                                            <button className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined text-lg">edit</span></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 whitespace-nowrap">2023-10-20</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Não Justificada</span></td>
                                        <td className="p-4 whitespace-nowrap">1 Dia</td>
                                        <td className="p-4 whitespace-nowrap"><span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300">Rejeitada</span></td>
                                        <td className="p-4 text-sm text-slate-600 dark:text-slate-400">Motivo pessoal, sem documento</td>
                                        <td className="p-4 whitespace-nowrap">
                                            <button className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary"><span className="material-symbols-outlined text-lg">edit</span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeHistory;
