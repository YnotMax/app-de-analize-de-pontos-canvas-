import React from 'react';

const TeamEngagement: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto animate-fade-in font-display text-slate-200">
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text">
                🌟 Team Well-being & Engagement Hub
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl">
                Empower your team! Monitor cohesion, celebrate presence, and discover opportunities to foster a thriving, connected environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 bg-[#1e293b] p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-100 flex items-center">
                            <span className="material-symbols-outlined text-4xl mr-3 text-indigo-400">group</span>
                            Team Cohesion & Engagement Scores
                        </h2>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-lg">
                                <span className="text-7xl font-extrabold text-emerald-400 drop-shadow-lg">8.7</span>
                                <span className="text-xl font-medium text-slate-400 mt-2">Team Cohesion Score</span>
                                <p className="text-sm text-slate-500 text-center mt-1">Based on interaction, collaboration, and collective well-being.</p>
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-lg">
                                <span className="text-7xl font-extrabold text-indigo-400 drop-shadow-lg">82%</span>
                                <span className="text-xl font-medium text-slate-400 mt-2">Overall Engagement Level</span>
                                <p className="text-sm text-slate-500 text-center mt-1">Reflects presence, participation, and feedback.</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold mb-4 text-slate-100">Individual Engagement Meters:</h3>
                            {[
                                { name: 'Jane Doe', score: 92, color: 'bg-emerald-500', label: 'High Engagement' },
                                { name: 'John Smith', score: 68, color: 'bg-amber-500', label: 'Medium Engagement' },
                                { name: 'Maria Silva', score: 85, color: 'bg-emerald-500', label: 'High Engagement' },
                            ].map((person, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-lg font-medium text-slate-100 flex items-center">
                                            <span className="material-symbols-outlined text-xl mr-2 text-blue-300">person</span>{person.name}
                                        </span>
                                        <span className={`text-lg font-bold ${person.score > 80 ? 'text-emerald-400' : 'text-amber-400'}`}>{person.score}% Engaged</span>
                                    </div>
                                    <div className="relative w-full h-3 rounded-full overflow-hidden bg-slate-700">
                                        <div className={`h-full ${person.color} rounded-full`} style={{ width: `${person.score}%` }} title={person.label}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-700">
                        <p className="text-slate-500 text-sm italic">Engagement calculated based on active presence, participation in team activities, and reported well-being indicators.</p>
                    </div>
                </div>

                <div className="md:col-span-1 flex flex-col space-y-8">
                    <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg border border-slate-700">
                        <h2 className="text-2xl font-bold mb-4 text-slate-100 flex items-center">
                            <span className="material-symbols-outlined text-3xl mr-3 text-yellow-400">award_star</span>
                            Team Attendance Streak Tracker
                        </h2>
                        <div className="flex justify-between items-center text-slate-400 mb-4">
                            <button className="p-1 rounded hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-base">chevron_left</span></button>
                            <span className="font-semibold text-xl text-slate-100">March 2024</span>
                            <button className="p-1 rounded hover:bg-white/10 transition-colors"><span className="material-symbols-outlined text-base">chevron_right</span></button>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                <div key={day} className="text-slate-500 font-medium">{day}</div>
                            ))}
                            {/* Mock calendar cells */}
                            {Array.from({ length: 31 }).map((_, i) => {
                                const day = i + 1;
                                let statusClass = "bg-emerald-500 text-white"; // Default present
                                if ([6, 7, 13, 14, 20, 21, 27, 28].includes(day)) statusClass = "bg-slate-700 text-slate-500"; // Weekend
                                if (day === 8 || day === 22) statusClass = "bg-amber-500 text-slate-900"; // Partial
                                if (day === 13) statusClass = "bg-rose-500 text-white"; // Absent
                                if (day > 28) statusClass = "bg-slate-800 text-slate-600"; // Future

                                return (
                                    <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mx-auto ${statusClass}`}>
                                        {day}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg text-center shadow-inner border border-slate-700">
                            <p className="text-xl font-bold text-yellow-400 flex items-center justify-center mb-2">
                                <span className="material-symbols-outlined text-4xl mr-2">military_tech</span>
                                Team Current Streak: <span className="text-3xl mx-2">5 Days!</span>
                            </p>
                            <p className="text-sm text-slate-400">Keep up the great work! Let's aim for a new record!</p>
                        </div>
                    </div>

                    <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg border border-slate-700 flex-1 flex flex-col">
                        <h2 className="text-2xl font-bold mb-4 text-slate-100 flex items-center">
                            <span className="material-symbols-outlined text-3xl mr-3 text-blue-400">psychology</span>
                            Coaching & Team Building Prompts
                        </h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center text-slate-400">
                                <span>Highest Streak:</span> <span className="font-bold text-lg text-yellow-400">12 Days 🎉</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-400">
                                <span>Avg. Full Presence:</span> <span className="font-bold text-lg text-emerald-400">91%</span>
                            </div>
                        </div>
                        <div className="mt-auto pt-6 border-t border-slate-700">
                            <h3 className="font-bold text-xl text-slate-100 mb-4 flex items-center">
                                <span className="material-symbols-outlined text-indigo-400 mr-2">lightbulb</span> Suggestions for Growth:
                            </h3>
                            <ul className="list-disc list-inside space-y-3 text-slate-400 ml-2 text-sm">
                                <li><span className="text-blue-300 font-semibold">Coaching:</span> John Smith's engagement is 68%. Quick 1:1 advised.</li>
                                <li><span className="text-emerald-300 font-semibold">Team Building:</span> Celebrate the 5-day streak!</li>
                                <li><span className="text-purple-300 font-semibold">Well-being:</span> Notice increasing 'partial presence' days.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamEngagement;
