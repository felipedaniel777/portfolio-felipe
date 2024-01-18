'use client';
import Link from 'next/link';
import { ProjectsCard } from './project-card';
import { Project } from '@/app/types/projects';
import { motion } from 'framer-motion';
import { fadeUpAnimation } from '@/app/lib/animation';

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="py-32 bg-gray-950">
      <div className="container grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
        {projects.map((project, index) => (
          <motion.div
            {...fadeUpAnimation}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={project.title}
          >
            <Link key={project.title} href={`/projects/${project.slug}`}>
              <ProjectsCard project={project} />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
