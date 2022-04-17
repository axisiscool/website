import Link from 'next/link';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div className="bg-cream dark:bg-slate-900 justify-center items-center flex h-screen text-center">
      <div className="text-center">
        <h1 className="font-semibold dark:text-white text-4xl lg:text-5xl">Hi, I'm Jonathan.</h1>
        <p className=" dark:text-white text-lg lg:text-xl pt-3">A Full-Stack Developer from New York.</p>
        <div className="grid grid-cols-3 gap-2 lg:gap-3 pt-5">
          <Link href="/projects">
            <button className="dark:bg-green-100 bg-green-400 hover:bg-green-500 dark:hover:bg-green-200 text-slate-800 text-lg font-bold text-center p-2 pl-14 pr-14 rounded-lg shadow-md dark:shadow-lg">
              Projects
            </button>
          </Link>
          <Link href="https://github.com/axisiscool">
            <button className="dark:bg-green-100 bg-green-400 hover:bg-green-500 dark:hover:bg-green-200 text-slate-800 text-lg font-bold text-center p-2 pl-15 pr-15 rounded-lg shadow-md dark:shadow-lg">
              Github
            </button>
          </Link>
          <Link href="https://discord.com/users/461750180388274180">
            <button className="dark:bg-green-100 bg-green-400 hover:bg-green-500 dark:hover:bg-green-200 text-slate-800 text-lg font-bold text-center p-2 pl-15 pr-15 rounded-lg shadow-md dark:shadow-lg">
              Discord
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
