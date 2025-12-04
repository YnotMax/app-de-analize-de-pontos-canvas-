import React, { useState } from 'react';

interface Employee {
    id: string;
    name: string;
    role: string;
    avatar: string;
    type: 'individual' | 'group';
    absenteeism: string;
    absenteeismColor: string;
    faults: number;
    weeks: { height: string; color: string; title: string }[];
}

const initialEmployees: Employee[] = [
    {
        id: 'divino',
        name: 'Divino Sermingo',
        role: 'Marketing',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSBSV6F5aObkZ0e89HsEZgnM7YaYPbKyuVma-kepeGmanMCQbfPzs1Q-VJ9QkFYFWn4bM6M2fgqoJzGay6OfFs5h9wW5NYO1GGbqItNDO9M1uMi6gIl0xtbH01G8pObDS33TswcFlPP7or4Mb-kc_dCKo0mjxxIWAwZLoYtXMpCzGMMbtTAZP4gx5rNT4JwrdDSIwsmd_ioOI4V6viz6QB70I01aMS8x2yo-AHwBdDAwlvULMQpU1EQj8lzI4SV3hMko-8oPUkntU',
        type: 'individual',
        absenteeism: '4.5%',
        absenteeismColor: 'text-red-500',
        faults: 3,
        weeks: [
            { height: '60%', color: 'bg-primary/80', title: 'Semana 1: 60%' },
            { height: '75%', color: 'bg-primary/80', title: 'Semana 2: 75%' },
            { height: '50%', color: 'bg-red-500/80', title: 'Semana 3: 50% (Crítico)' },
            { height: '80%', color: 'bg-primary/80', title: 'Semana 4: 80%' },
            { height: '65%', color: 'bg-primary/80', title: 'Semana 5: 65%' },
        ]
    },
    {
        id: 'adiana',
        name: 'Adiana Bulias',
        role: 'Desenvolvimento',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfuLrwCEABzD2srEo_U_CjshrJ9_2loRO4btrWaEiGJbMLVFD1BwEMPK4Kho_mW2zlWBLJsWZ3iWcyD3s-7JcLuVnPKWbPhXzkRTR0MbPP0ttx9QDwat5NEfCd4woDQcXNr5f-A1VqxB9lGTmYxkEs6OyZShEGeEdoFvzdgseImdPkzHPd4Yq5rcgvjgOAgtquYuFlyNCWz91mQLCUhBXkcTt6V1MBx53bMVRWAi_Fz06kGX_ZxMicdLWBqJ6UH7qmdIKoeIvXD58',
        type: 'individual',
        absenteeism: '4.5%',
        absenteeismColor: 'text-red-500',
        faults: 2,
        weeks: [
            { height: '80%', color: 'bg-primary/80', title: 'Semana 1: 80%' },
            { height: '65%', color: 'bg-primary/80', title: 'Semana 2: 65%' },
            { height: '75%', color: 'bg-primary/80', title: 'Semana 3: 75%' },
            { height: '50%', color: 'bg-red-500/80', title: 'Semana 4: 50% (Crítico)' },
            { height: '60%', color: 'bg-primary/80', title: 'Semana 5: 60%' },
        ]
    },
    {
        id: 'marketing',
        name: 'Marketing',
        role: 'Departamento (8 Pessoas)',
        avatar: '',
        type: 'group',
        absenteeism: '6.2%',
        absenteeismColor: 'text-red-500',
        faults: 12,
        weeks: [
            { height: '80%', color: 'bg-primary/80', title: 'Semana 1: 80%' },
            { height: '65%', color: 'bg-red-500/80', title: 'Semana 2: 65% (Crítico)' },
            { height: '75%', color: 'bg-primary/80', title: 'Semana 3: 75%' },
            { height: '50%', color: 'bg-red-500/80', title: 'Semana 4: 50% (Crítico)' },
            { height: '80%', color: 'bg-primary/80', title: 'Semana 5: 80%' },
        ]
    },
    {
        id: 'adana',
        name: 'Adana Marco',
        role: 'RH',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaPet_OGJsKv4PgLl9byoCuZkh4dgluaEk61D4i9_fQ287eTe2pEVkcxiQta7Nq4oo6nEuWly56w-6VKQbg4dbzw8EeckofPaQPRUOpFRNN5ro8V9CWe7LBRq1Ky1uLTLYCU9VSOJYaceOx67MKO_aSj38xOLiCCk4xFvtp4h0TvTytb9goOlb2G2mUqmRfQ_Raa5AOl1H8FsCOEKtw0-PA_nYT8ThgAajZLTOagihwPSlzzl1Wz73zcN6lyHq0i1S5WBr-Qk3XpQ',
        type: 'individual',
        absenteeism: '4.3%',
        absenteeismColor: 'text-red-500',
        faults: 2,
        weeks: [
            { height: '60%', color: 'bg-primary/80', title: 'Semana 1: 60%' },
            { height: '80%', color: 'bg-primary/80', title: 'Semana 2: 80%' },
            { height: '50%', color: 'bg-red-500/80', title: 'Semana 3: 50% (Crítico)' },
            { height: '75%', color: 'bg-primary/80', title: 'Semana 4: 75%' },
            { height: '65%', color: 'bg-primary/80', title: 'Semana 5: 65%' },
        ]
    },
    {
        id: 'vendas',
        name: 'Vendas',
        role: 'Departamento (15 Pessoas)',
        avatar: '',
        type: 'group',
        absenteeism: '3.8%',
        absenteeismColor: 'text-primary',
        faults: 10,
        weeks: [
            { height: '75%', color: 'bg-primary/80', title: 'Semana 1: 75%' },
            { height: '80%', color: 'bg-primary/80', title: 'Semana 2: 80%' },
            { height: '65%', color: 'bg-primary/80', title: 'Semana 3: 65%' },
            { height: '70%', color: 'bg-primary/80', title: 'Semana 4: 70%' },
            { height: '50%', color: 'bg-red-500/80', title: 'Semana 5: 50% (Crítico)' },
        ]
    }
];

const TeamDetailedView: React.FC = () => {
    const [comparisonItems, setComparisonItems] = useState<Employee[]>([]);

    const handleDragStart = (e: React.DragEvent, employee: Employee) => {
        e.dataTransfer.setData('text/plain', JSON.stringify(employee));
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        if (data) {
            const employee = JSON.parse(data) as Employee;
            if (!comparisonItems.find(i => i.id === employee.id)) {
                setComparisonItems([...comparisonItems, employee]);
            }
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const removeItem = (id: string) => {
        setComparisonItems(comparisonItems.filter(i => i.id !== id));
    };

    return (
        <div className="max-w-7xl mx-auto animate-fade-in h-[calc(100vh-6rem)] flex flex-col">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Comparação Dinâmica de Frequência</h1>

            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="relative w-full sm:w-auto flex-grow max-w-sm">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">search</span>
                    <input className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500" placeholder="Buscar colaborador ou grupo..." type="text" />
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                        <option>Período</option>
                        <option>Últimos 7 dias</option>
                        <option>Últimos 30 dias</option>
                        <option>Mês atual</option>
                    </select>
                    <select className="w-full sm:w-auto bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary p-2">
                        <option>Tipo</option>
                        <option>Colaborador</option>
                        <option>Grupo/Departamento</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-1 gap-8 overflow-hidden">
                {/* Source List */}
                <div className="w-1/2 flex flex-col bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 overflow-y-auto">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Colaboradores & Grupos</h2>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pb-4">
                        {initialEmployees.map((emp) => (
                            <div
                                key={emp.id}
                                draggable
                                onDragStart={(e) => handleDragStart(e, emp)}
                                className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col gap-3 cursor-grab active:cursor-grabbing hover:border-primary transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    {emp.type === 'group' ? (
                                        <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                                    ) : (
                                        <img alt={`Avatar de ${emp.name}`} className="w-10 h-10 rounded-full object-cover" src={emp.avatar} />
                                    )}
                                    <div>
                                        <div className="font-medium text-slate-900 dark:text-white">{emp.name}</div>
                                        <div className="text-sm text-slate-500 dark:text-slate-400">{emp.role}</div>
                                    </div>
                                </div>

                                <div className="h-16 w-full bg-slate-200 dark:bg-slate-700 rounded-md flex items-end overflow-hidden px-1 pt-1 gap-1">
                                    {emp.weeks.map((week, idx) => (
                                        <div key={idx} className={`flex-1 rounded-t-sm ${week.color}`} style={{ height: week.height }} title={week.title}></div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center text-sm text-slate-600 dark:text-slate-400">
                                    <span>Absenteísmo: <span className={`${emp.absenteeismColor} font-semibold`}>{emp.absenteeism}</span></span>
                                    <span>Faltas: <span className="font-semibold">{emp.faults}</span></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Drop Zone */}
                <div className="w-1/2 flex flex-col bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 overflow-y-auto">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Área de Comparação</h2>

                    {comparisonItems.length === 0 ? (
                        <div
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            className="flex-1 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 gap-4 min-h-[200px] transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
                        >
                            <span className="material-symbols-outlined text-6xl text-slate-400 dark:text-slate-600">drag_handle</span>
                            <p className="text-center">Arraste e solte colaboradores ou grupos aqui para comparar a frequência.</p>
                        </div>
                    ) : (
                        <div
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            className="flex-1 grid grid-cols-1 gap-4 content-start"
                        >
                            {comparisonItems.map((emp) => (
                                <div key={emp.id} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col gap-3 animate-scale-in">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {emp.type === 'group' ? (
                                                <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                                            ) : (
                                                <img alt={`Avatar de ${emp.name}`} className="w-10 h-10 rounded-full object-cover" src={emp.avatar} />
                                            )}
                                            <div>
                                                <div className="font-medium text-slate-900 dark:text-white">{emp.name}</div>
                                                <div className="text-sm text-slate-500 dark:text-slate-400">{emp.role}</div>
                                            </div>
                                        </div>
                                        <button onClick={() => removeItem(emp.id)} className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                                            <span className="material-symbols-outlined">close</span>
                                        </button>
                                    </div>

                                    <div className="relative h-32 w-full bg-slate-200 dark:bg-slate-700 rounded-md p-2">
                                        <div className="absolute inset-0 flex items-end justify-around p-2 gap-2">
                                            {emp.weeks.map((week, idx) => (
                                                <div key={idx} className="flex flex-col items-center text-xs text-slate-600 dark:text-slate-400 w-full">
                                                    <div className={`w-full max-w-[20px] rounded-t-sm ${week.color.replace('/80', '')}`} style={{ height: week.height }} title={week.title}></div>
                                                    <span className="mt-1">S{idx + 1}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-around items-center text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-2">
                                        <div className="flex flex-col items-center">
                                            <span>Absenteísmo:</span>
                                            <span className={`${emp.absenteeismColor} font-semibold`}>{emp.absenteeism}</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span>Total Faltas:</span>
                                            <span className="font-semibold">{emp.faults}</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <span>Produtividade:</span>
                                            <span className={`${Math.random() > 0.5 ? 'text-green-500' : 'text-orange-500'} font-semibold`}>
                                                {Math.random() > 0.5 ? '+' : '-'} {Math.floor(Math.random() * 15) + 5}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4 flex items-center justify-center text-slate-400 min-h-[100px]">
                                <p>Arraste mais itens aqui</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamDetailedView;
