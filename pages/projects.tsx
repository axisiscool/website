import type { NextPage } from 'next';
import Link from 'next/link';

const Projects: NextPage = () => {
  return (
    <div className="bg-cream dark:bg-slate-900 justify-center items-center flex h-screen">
      <div className="text-center">
        <h1 className="font-semibold dark:text-white text-5xl">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 pt-8">
          <div className="dark:bg-green-100 max-w-sm bg-green-400 hover:bg-green-500 dark:hover:bg-green-200 text-slate-800 text-lg font-bold text-center p-2 pl-14 pr-14 rounded-lg shadow-md dark:shadow-lg">
            <u>
              <Link href="https://github.com/Parallel-Development">Parallel</Link>
            </u>
            <p className="text-sm">
              Parallel is a powerful, easy to use, and completely customizable moderation bot designed for large
              servers.
            </p>
          </div>
          <div className="dark:bg-green-100 max-w-sm bg-green-400 hover:bg-green-500 dark:hover:bg-green-200 text-slate-800 text-lg font-bold text-center p-2 px-10 rounded-lg shadow-md dark:shadow-lg">
            <u>
              <Link href="https://github.com/axisiscool/velocity">Velocity</Link>
            </u>
            <p className="text-sm">A super fast API Wrapper for Perspective.</p>
          </div>
          <div className="dark:bg-green-100 max-w-sm bg-green-400 hover:bg-green-500 dark:hover:bg-green-200 text-slate-800 text-lg font-bold text-center p-2 px-10 rounded-lg shadow-md dark:shadow-lg">
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
