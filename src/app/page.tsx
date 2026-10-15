import MainPage from "./components/MainPage";

const APP_VERSION = "0.0.3";

export default function Home() {
  return (
    <main>
      <MainPage />
      <span className="fixed bottom-5 right-5 rounded-lg border border-gray-300/30 bg-white/80 px-3 py-1.5 text-xs font-medium text-gray-500 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-[#58242D]/80 dark:text-rose-200">
        SkillTree v{APP_VERSION}
      </span>
    </main>
  );
}
