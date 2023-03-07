import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Link from 'next/link';

const Index: NextPage = () => (
  <div className="flex h-screen items-center justify-center bg-cream text-center dark:bg-slate-900">
    <div className="text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.1
            }
          }
        }}
      >
        <h1 className="text-4xl font-semibold dark:text-white md:text-5xl">Hi, I'm Jonathan.</h1>
        <p className="pt-3 text-lg dark:text-white md:text-xl">A Full-Stack Developer from New York.</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-2 pt-5 lg:gap-3">
        <Link href="https://github.com/axisiscool">
          <button className="rounded-full bg-blue-400 p-2 px-6 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-blue-500 dark:bg-blue-300 dark:shadow-lg dark:hover:bg-blue-400 md:px-8 lg:px-10">
            Github
          </button>
        </Link>
        <Link href="mailto:me@jonathanzero.com">
          <button className="rounded-full bg-blue-400 p-2 px-6 text-center text-lg font-bold text-slate-800 shadow-md hover:bg-blue-500 dark:bg-blue-300 dark:shadow-lg dark:hover:bg-blue-400 md:px-8 lg:px-10">
            Email
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default Index;
