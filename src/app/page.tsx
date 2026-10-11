'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-200">
      <div className="flex flex-col items-center justify-center bg-white/90 border border-white/10 rounded-3xl p-12 shadow-2xl backdrop-blur-md max-w-md w-full text-center transition-transform ease-in-out hover:scale-105">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-red-400 via-indigo-400 to-green-400 bg-clip-text text-transparent select-none animate-fade-in mb-2 transition-transform ease-in-out hover:scale-102">
          SkillTree Tracker
        </h1>   
        <p className="text-slate-400 text-sm transition-transform ease-in-out hover:scale-102">
          Welcome to your authentic skill tracker dashboard.
        </p>
      </div>
    </main>
  );
}
