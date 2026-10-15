export default function ProgressTab() {
  const progress = 67;

  return (
    <section className="flex min-h-[160px] w-full flex-col justify-center gap-5 rounded-xl bg-white p-6 text-gray-900 shadow-lg dark:bg-[#6A3444] dark:text-white dark:shadow-black/30">

      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">
            Your Progress
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-rose-200">
            Track your skill development
          </p>
        </div>

        <span className="text-2xl font-bold text-[#b82728] dark:text-rose-300">
          {progress}%
        </span>
      </div>

      <div
        role="progressbar"
        aria-label="Skill completion progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        className="h-4 w-full overflow-hidden rounded-full bg-rose-100 dark:bg-[#471920]"
      >
        <div
          className="h-full rounded-full bg-[#b82728] dark:bg-[#e46c7c]"
          style={{ width: `${progress}%` }}
        />
      </div>

    </section>
  );
}
