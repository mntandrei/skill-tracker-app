export default function SelectTab() {
  return (
    <div className="flex min-h-[250px] w-full flex-col rounded-xl bg-white p-6 shadow-lg dark:bg-[#6A3444]">
      <h2 className="text-xl font-bold">
        Your Current Skill:
      </h2>
      <h1 className="text-3xl font-bold mt-2 text-[#b82728] dark:text-rose-300 hover:transition-all ease-in-out hover:scale-105 duration-300">Web Development</h1>
      <p className="mt-1 ml-1 text-md text-gray-500 dark:text-rose-200">
        What you can learn next:
      </p>
      <h1 className="text-2xl font-bold text-cyan-600 dark:text-cyan-600 hover:transition ease-in-out hover:scale-105 duration-300">React</h1>
    </div>
  );
}