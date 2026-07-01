import Project from "../components/project";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { GITHUB_LINK } from '../constants.jsx';
import { useTranslation } from 'react-i18next';
import SectionHeader from "../components/section_header";
import { projects } from "../data/projects";

export default function Projects({ id }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const { t } = useTranslation();

    return (
        <section id={id} className="w-full">
            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full pt-8">
                <SectionHeader title={'<' + t('projects.heading') + '/>'} />
                <div className="solid-background p-8 w-full">
                    <div className="columns-1 md:columns-2 gap-12 space-y-12">
                        <div>
                            <motion.div initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{
                                    duration: 0.5, ease: "easeOut", delay: 0.5
                                }} >
                                <h2>{t('projects.subheading')}</h2>
                            </motion.div>
                            <br />
                            <motion.div initial={{ opacity: 0, y: -25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 1, ease: "easeOut", delay: 0.7
                                }} >
                                <p className="text-[var(--color-body)]">{t('projects.description')}</p>
                                <br />
                                <p className="text-[var(--color-body)]">
                                    {t('projects.see_more')}{" "}
                                    <a
                                        href={GITHUB_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--color-primary)] hover:underline"
                                    >
                                        {t('projects.github')}
                                    </a>
                                </p>
                            </motion.div>
                        </div>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                ref={ref}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 1, ease: "easeOut", delay: 1 + index * 0.2 }}
                                className="w-full pt-8">
                                <Project
                                    slug={project.slug}
                                    name={t(`projects.items.${project.slug}.name`)}
                                    openSource={project.openSource}
                                    image={project.image}
                                    description={t(`projects.items.${project.slug}.description`)}
                                    technologies={project.technologies}
                                    githubUrl={project.githubUrl}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
