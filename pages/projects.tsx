import type { NextPage } from 'next';
import Link from 'next/link';

const Projects: NextPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-cream dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-5xl font-semibold dark:text-white">Projects</h1>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 pt-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm rounded-lg bg-green-400 p-2 pl-14 pr-14 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-green-500 dark:bg-green-100 dark:shadow-lg dark:hover:bg-green-200">
            <u>
              <Link href="https://github.com/Parallel-Development">Parallel</Link>
            </u>
            <p className="text-sm">
              Parallel is a powerful, easy to use, and completely customizable moderation bot designed for large
              servers.
            </p>
          </div>
          <div className="max-w-sm rounded-lg bg-green-400 p-2 px-10 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-green-500 dark:bg-green-100 dark:shadow-lg dark:hover:bg-green-200">
            <u>
              <Link href="https://github.com/axisiscool/velocity">Velocity</Link>
            </u>
            <p className="text-sm">A super fast API Wrapper for Perspective.</p>
          </div>
          <div className="max-w-sm rounded-lg bg-green-400 p-2 px-10 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-green-500 dark:bg-green-100 dark:shadow-lg dark:hover:bg-green-200">
            <u>
              <Link href="https://github.com/SoundDrout-Dev">Sound's Utilities</Link>
            </u>
            <p className="text-sm">A private moderation bot for Sound's World with robust features.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
