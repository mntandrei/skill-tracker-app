import SelectTab from "./SelectTab";
import StreakTab from "./StreakTab";
import ProgressTab from "./ProgressTab";

export default function MainPage() {
  return (
    <main className="mt-6 px-4">
      <div className="mx-auto min-h-[450px] w-full max-w-5xl rounded-2xl bg-slate-100 p-10 dark:bg-[#58242D]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SelectTab />
          <StreakTab />
          <div className="md:col-span-2">
            <ProgressTab />
          </div>
        </div>

      </div>
    </main>
  );
}
