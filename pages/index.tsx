import Link from 'next/link';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-cream text-center dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-4xl font-semibold dark:text-white md:text-5xl">Hi, I'm Jonathan.</h1>
        <p className="pt-3 text-lg dark:text-white md:text-xl">A Full-Stack Developer from New York.</p>
        <div className="grid grid-cols-3 gap-2 pt-5 lg:gap-3">
          <Link href="/projects">
            <button className="rounded-lg bg-blue-400 p-2 px-6 md:px-8 lg:px-10 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-blue-500 dark:bg-blue-300 dark:shadow-lg dark:hover:bg-blue-400">
              Projects
            </button>
          </Link>
          <Link href="https://github.com/axisiscool">
            <button className="px-6 rounded-lg bg-blue-400 p-2 md:px-8 lg:px-10 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-blue-500 dark:bg-blue-300 dark:shadow-lg dark:hover:bg-blue-400">
              Github
            </button>
          </Link>
          <Link href="https://discord.com/users/461750180388274180">
            <button className="px-6 md:px-8 lg:px-10 rounded-lg bg-blue-400 p-2 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-blue-500 dark:bg-blue-300 dark:shadow-lg dark:hover:bg-blue-400">
              Discord
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
