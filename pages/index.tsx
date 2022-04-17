import Link from 'next/link';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-cream text-center dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-4xl font-semibold dark:text-white lg:text-5xl">Hi, I'm Jonathan.</h1>
        <p className=" pt-3 text-lg dark:text-white lg:text-xl">A Full-Stack Developer from New York.</p>
        <div className="grid grid-cols-3 gap-2 pt-5 lg:gap-3">
          <Link href="/projects">
            <button className="rounded-lg bg-green-400 p-2 pl-14 pr-14 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-green-500 dark:bg-green-100 dark:shadow-lg dark:hover:bg-green-200">
              Projects
            </button>
          </Link>
          <Link href="https://github.com/axisiscool">
            <button className="pl-15 pr-15 rounded-lg bg-green-400 p-2 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-green-500 dark:bg-green-100 dark:shadow-lg dark:hover:bg-green-200">
              Github
            </button>
          </Link>
          <Link href="https://discord.com/users/461750180388274180">
            <button className="pl-15 pr-15 rounded-lg bg-green-400 p-2 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-green-500 dark:bg-green-100 dark:shadow-lg dark:hover:bg-green-200">
              Discord
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
