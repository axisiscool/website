import { HomeIcon, LinkIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Link from 'next/link';

const projects = [
  {
    name: "Sound's Utilities",
    description: "A private moderation bot for Sound's World with robust features.",
    tag: 'Discord Bot',
    url: 'https://github.com/SoundDrout-Dev'
  },
  {
    name: 'Parallel',
    description: 'Parallel is a powerful and completely customizable moderation bot.',
    tag: 'Discord Bot',
    url: 'https://github.com/Parallel-Development'
  },
  {
    name: 'Velocity',
    description: 'A super fast API Wrapper for Perspective.',
    tag: 'Package',
    url: 'https://github.com/axisiscool/velocity'
  }
];

const Projects: NextPage = () => {
  let delay = 0.2;

  return (
    <div className="flex h-screen items-center justify-center bg-cream dark:bg-slate-900">
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
          <h1 className="text-5xl font-semibold dark:text-white">Projects</h1>
        </motion.div>
        <ul role="list" className="grid grid-cols-1 gap-6 pt-8 pb-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const cachedDelay = delay;
            delay += 0.1;
            return (
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
                      delay: cachedDelay
                    }
                  }
                }}
              >
                <li key={idx} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-sm font-medium text-gray-900">{project.name}</h3>
                        <span className="inline-block flex-shrink-0 rounded-full bg-blue-400 px-2 py-0.5 text-xs font-medium text-slate-800 dark:bg-blue-300">
                          {project.tag}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-left text-sm text-gray-500">{project.description}</p>
                    </div>
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                      <div className="flex w-0 flex-1">
                        <a
                          href={project.url}
                          className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                          <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span className="ml-3">Link</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </motion.div>
            );
          })}
        </ul>
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
                delay: 0.6
              }
            }
          }}
        >
          <Link href="/">
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-transparent bg-blue-400 px-5 py-2 text-base font-medium text-slate-800 shadow-sm hover:bg-blue-500 focus:outline-none dark:bg-blue-300 dark:shadow-lg dark:hover:bg-blue-400"
            >
              <HomeIcon className="h-5 w-5" aria-hidden="true" />
              <span className="ml-2">Home</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
