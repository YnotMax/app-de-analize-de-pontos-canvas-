import React from 'react';

const TeamList: React.FC = () => {
    const employees = [
        { name: 'Divino Sermingo', role: 'Marketing', absenteeism: '4.5%', trend: 'up', trendValue: '20%', faults: 3, pending: 1, status: 'Presente', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBSV6F5aObkZ0e89HsEZgnM7YaYPbKyuVma-kepeGmanMCQbfPzs1Q-VJ9QkFYFWn4bM6M2fgqoJzGay6OfFs5h9wW5NYO1GGbqItNDO9M1uMi6gIl0xtbH01G8pObDS33TswcFlPP7or4Mb-kc_dCKo0mjxxIWAwZLoYtXMpCzGMMbtTAZP4gx5rNT4JwrdDSIwsmd_ioOI4V6viz6QB70I01aMS8x2yo-AHwBdDAwlvULMQpU1EQj8lzI4SV3hMko-8oPUkntU' },
        { name: 'Adiana Bulias', role: 'Desenvolvimento', absenteeism: '4.5%', trend: 'up', trendValue: '20%', faults: 2, pending: 1, status: 'Ausente', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfuLrwCEABzD2srEo_U_CjshrJ9_2loRO4btrWaEiGJbMLVFD1BwEMPK4Kho_mW2zlWBLJsWZ3iWcyD3s-7JcLuVnPKWbPhXzkRTR0MbPP0ttx9QDwat5NEfCd4woDQcXNr5f-A1VqxB9lGTmYxkEs6OyZShEGeEdoFvzdgseImdPkzHPd4Yq5rcgvjgOAgtquYuFlyNCWz91mQLCUhBXkcTt6V1MBx53bMVRWAi_Fz06kGX_ZxMicdLWBqJ6UH7qmdIKoeIvXD58' },
        { name: 'Adana Marco', role: 'RH', absenteeism: '4.3%', trend: 'up', trendValue: '20%', faults: 2, pending: 2, status: 'Férias', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaPet_OGJsKv4PgLl9byoCuZkh4dgluaEk61D4i9_fQ287eTe2pEVkcxiQta7Nq4oo6nEuWly56w-6VKQbg4dbzw8EeckofPaQPRUOpFRNN5ro8V9CWe7LBRq1Ky1uLTLYCU9VSOJYaceOx67MKO_aSj38xOLiCCk4xFvtp4h0TvTytb9goOlb2G2mUqmRfQ_Raa5AOl1H8FsCOEKtw0-PA_nYT8ThgAajZLTOagihwPSlzzl1Wz73zcN6lyHq0i1S5WBr-Qk3XpQ' },
        { name: 'Royenio Cormaeno', role: 'TI', absenteeism: '3.5%', trend: 'up', trendValue: '20%', faults: 4, pending: 0, status: 'Ausente', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjx74A1jUURWLec39zCQOEviRERbNhFah6ashA1pz6rqfUmgLR_4FMGE1DtYhfpGA4EOMrWFsmoFwj02FLMrZSPs93IpCfIg7aVUByKT3iu7Beh7LzlNLu3u241-LUa0krvtJKXN8xiQGiwKutIN2tQuU-wwZeC05ZlvFZ3yayCcSvd5XYHFA_nsyVWTiPWUZOpzTVfA28GE7A2Qm84liyduwxtv5x_TfZ3qYkBW5vOMj_fh4TaX5mqtSe9Q4WrDTSOtdDD_tU8xw' },
        { name: 'Jersen Sefranger', role: 'Desenvolvimento', absenteeism: '2.5%', trend: 'down', trendValue: '19%', faults: 1, pending: 0, status: 'Ausente', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdaa6ueRKJRRov7oMZFN7R_wUtOynpMQFNCr-IBcWCVnM42GXRk4AhAstvvlOOPGuzz6NYZZ_e1DIsb4ezfVsCAEI4bdYhJUwtlJDgqWYF6pw380_R2Yr2yTCrgwdNn6_NX3dZU65SwKzzbgaJwvYZyAzw0VHYbOdSZ2DnO3F4UG7-CGg-hm_n0ACuCRxKH5B8BNMsxwzCaSw9mVRo4MelJ7ErLj_OvGotPymibzYnx-cT69x_Y_wCOXJN4BzKERCu3l-gz_JWN18' },
        { name: 'Adana Rilhan', role: 'Vendas', absenteeism: '2.5%', trend: 'down', trendValue: '15%', faults: 3, pending: 3, status: 'Presente', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYp1CoDBk__9iudZ46MKEzeqsVtfbRiQMGOAz1yswBuWjuZoL0kQhR5d6E-P7cCzhCYksB9Zep99resbqjbwduPr-XUEH6tXhh_5h5RNrrWBDBBZCnDpjjQ0x7RC7BI02KxYl-XOuWxg5DPnGQ8_yrMbANr2A_smsieABVuOiribp_xp9aEJvPfWvaHT5rImI2Id835zrH_GX3jHj0Rs1XKe9mN6HExgtEJ3qr3mUjgZGvM_fZoJBhCdSZ-jq090_IcDZO5UWiiQ4' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Presente': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
            case 'Ausente': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
            case 'Férias': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
            default: return 'bg-slate-100 text-slate-800';
        }
    };

    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-800 dark:text-white">
            <h1 className="text-3xl font-bold mb-8">Visão Geral da Equipe</h1>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="relative w-full sm:w-auto flex-grow max-w-sm">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">search</span>
                    <input className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500" placeholder="Buscar por nome, cargo..." type="text" />
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                        <option>Departamento</option>
                        <option>TI</option>
                        <option>RH</option>
                        <option>Marketing</option>
                    </select>
                    <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                        <option>Status</option>
                        <option>Presente</option>
                        <option>Ausente</option>
                        <option>Férias</option>
                    </select>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md overflow-hidden border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Colaborador</th>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Taxa de Absenteísmo</th>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Total de Faltas (Mês)</th>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Justificativas Pendentes</th>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            {employees.map((emp, index) => (
                                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <img alt={`Avatar de ${emp.name}`} className="w-10 h-10 rounded-full object-cover" src={emp.avatar} />
                                            <div>
                                                <div className="font-medium text-slate-900 dark:text-white">{emp.name}</div>
                                                <div className="text-sm text-slate-500 dark:text-slate-400">{emp.role}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <span className="text-slate-700 dark:text-slate-300">{emp.absenteeism}</span>
                                            <span className={`flex items-center text-sm ${emp.trend === 'up' ? 'text-red-500' : 'text-green-500'}`}>
                                                <span className="material-symbols-outlined text-base">{emp.trend === 'up' ? 'arrow_upward' : 'arrow_downward'}</span>
                                                {emp.trendValue}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-slate-700 dark:text-slate-300">{emp.faults}</td>
                                    <td className="p-4 whitespace-nowrap">
                                        {emp.pending > 0 ? (
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-amber-500 text-xl">warning</span>
                                                <span className="text-slate-700 dark:text-slate-300">{emp.pending}</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-slate-400 text-xl">remove</span>
                                                <span className="text-slate-400">0</span>
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(emp.status)}`}>
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap">
                                        <button className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">more_horiz</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeamList;
