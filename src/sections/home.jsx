import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';
import SectionHeader from "../components/section_header";
import Marquee from "../components/marquee";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import mail from "../assets/icons/mail.png";
import bovidata from "../assets/projects/bovidata.png";
import prefab from "../assets/prefab.jpg";
import profileImage from "../assets/profile_image.png";
import flutter from "../assets/icons/flutter.png";
import firebase from "../assets/icons/firebase.png";
import react from "../assets/icons/react.png";
import nextjs from "../assets/icons/nextjs.png";
import typescript from "../assets/icons/typescript.png";
import javascript from "../assets/icons/javascript.png";
import csharp from "../assets/icons/csharp.png";
import java from "../assets/icons/java.png";
import python from "../assets/icons/python.png";
import prisma from "../assets/icons/prisma.png";
import symfony from "../assets/icons/symfony.png";
import mariadb from "../assets/icons/mariadb.png";
import mysql from "../assets/icons/mysql.png";
import mongodb from "../assets/icons/mongodb.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import tailwind from "../assets/icons/tailwind.png";
import framerMotion from "../assets/icons/framer-motion.webp";
import git from "../assets/icons/git.png";
import rest from "../assets/icons/rest.png";
import responsive from "../assets/icons/idea.png";
import figma from "../assets/icons/figma.png";
import docker from "../assets/icons/docker.svg";
import { GITHUB_LINK, LINKEDIN_LINK } from '../constants.jsx';

const DEPLOYED_PROJECTS_COUNT = 5;
const YEARS_OF_EXPERIENCE = "3+";

const TECH_STACK = [
    { name: "Flutter", imgSrc: flutter },
    { name: "ReactJs", imgSrc: react },
    { name: "Next.js", imgSrc: nextjs },
    { name: "Typescript", imgSrc: typescript },
    { name: "Javascript", imgSrc: javascript },
    { name: "Java", imgSrc: java },
    { name: "C#", imgSrc: csharp },
    { name: "Python", imgSrc: python },
    { name: "Prisma", imgSrc: prisma },
    { name: "Symfony", imgSrc: symfony },
    { name: "MariaDB", imgSrc: mariadb },
    { name: "MySQL", imgSrc: mysql },
    { name: "MongoDB", imgSrc: mongodb },
    { name: "CSS3", imgSrc: css },
    { name: "HTML5", imgSrc: html },
    { name: "Tailwind CSS", imgSrc: tailwind },
    { name: "Framer Motion", imgSrc: framerMotion },
    { name: "Git", imgSrc: git },
    { name: "RESTful APIs", imgSrc: rest },
    { name: "Firebase", imgSrc: firebase },
    { name: "Responsive Design", imgSrc: responsive },
    { name: "Figma", imgSrc: figma },
    { name: "Docker", imgSrc: docker },
];

const TECH_STACK_ROWS = [
    TECH_STACK.slice(0, 8),
    TECH_STACK.slice(8, 16),
    TECH_STACK.slice(16),
];

export default function Home({ id }) {
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
            >
                <SectionHeader title={'<' + t('home.heading') + '/>'} />
                <div className="solid-background p-8 w-full">
                    <div className="grid grid-cols-12 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: -25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            className="card !p-6 col-span-12 md:col-span-3 flex flex-col items-center justify-center text-center gap-3"
                        >
                            <img
                                src={profileImage}
                                alt={t('home.name')}
                                className="w-[144px] h-[144px] rounded-full object-cover border-2 border-[var(--color-primary)]"
                            />
                            <div>
                                <h4>{t('home.name')}</h4>
                                <p className="text-[var(--color-body)] text-sm">{t('welcome.title')}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="card !p-0 overflow-hidden col-span-12 md:col-span-6 flex flex-col"
                        >
                            <img
                                src={bovidata}
                                alt={t('projects.items.bovidata.name')}
                                className="w-full h-40 object-cover block rounded-t-lg"
                            />
                            <div className="p-[16px] text-start">
                                <div className="flex items-center gap-2">
                                    <h4>{t('projects.items.bovidata.name')}</h4>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] px-2 text-xs font-medium text-[var(--color-primary)]">
                                        <span>{t('home.featured_project')}</span>
                                    </div>
                                </div>
                                <p className="text-[var(--color-body)] mt-2">{t('projects.items.bovidata.description')}</p>
                                <div className="flex items-center gap-[4px] mt-4">
                                    <div className="icon-button w-[24px] h-[24px]">
                                        <img src={flutter} alt="Flutter" className="w-1/2 h-1/2 object-contain" />
                                    </div>
                                    <div className="icon-button w-[24px] h-[24px]">
                                        <img src={firebase} alt="Firebase" className="w-1/2 h-1/2 object-contain" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: -25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                                className="card !p-6 text-center"
                            >
                                <h1>{DEPLOYED_PROJECTS_COUNT}</h1>
                                <p className="text-[var(--color-body)] text-xs uppercase tracking-wide">{t('home.stats_label')}</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                className="card !p-6 text-center"
                            >
                                <h1>{YEARS_OF_EXPERIENCE}</h1>
                                <p className="text-[var(--color-body)] text-xs uppercase tracking-wide">{t('home.experience_label')}</p>
                            </motion.div>
                            <motion.a
                                href="/cv.pdf"
                                download
                                initial={{ opacity: 0, y: -25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                            >
                                <button className="w-full">{t('home.download_cv')}</button>
                            </motion.a>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: -25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                            className="card !p-6 col-span-12 md:col-span-6"
                        >
                            <h5 className="mb-4">{t('home.about_heading')}</h5>
                            <p className="text-[var(--color-body)] text-sm">{t('welcome.p1')}</p>
                            <br />
                            <p className="text-[var(--color-body)] text-sm">{t('welcome.p2')}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                            className="card !p-0 overflow-hidden col-span-12 md:col-span-3"
                        >
                            <img src={prefab} alt="" className="w-full h-full min-h-[160px] object-cover" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                            className="card !p-6 col-span-12 md:col-span-3"
                        >
                            <h5 className="mb-4">{t('home.languages_heading')}</h5>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm">🇬🇧 {t('home.languages.english')}</p>
                                <p className="text-sm">🇪🇸 {t('home.languages.spanish')}</p>
                                <p className="text-sm">{t('home.languages.catalan')}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -25 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
                            className="card !p-6 col-span-12 md:col-span-8 overflow-hidden"
                        >
                            <h5 className="mb-4">{t('home.tech_stack')}</h5>
                            <div className="flex flex-col gap-4">
                                <Marquee items={TECH_STACK_ROWS[0]} direction="left" speed={28} size={40} />
                                <Marquee items={TECH_STACK_ROWS[1]} direction="right" speed={32} size={40} />
                                <Marquee items={TECH_STACK_ROWS[2]} direction="left" speed={26} size={40} />
                            </div>
                        </motion.div>

                        <div className="col-span-12 md:col-span-4 grid grid-cols-2 grid-rows-2 gap-4">
                            <motion.a
                                href={LINKEDIN_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: -25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                                className="card flex items-center justify-center"
                            >
                                <img src={linkedin} alt="linkedin" className="w-10 h-10 object-contain brightness-0 invert" />
                            </motion.a>
                            <motion.a
                                href={GITHUB_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: -25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 1.05 }}
                                className="card flex items-center justify-center"
                            >
                                <img src={github} alt="github" className="w-10 h-10 object-contain brightness-0 invert" />
                            </motion.a>
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: -25 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                                className="card flex items-center justify-center"
                            >
                                <img src={mail} alt="mail" className="w-10 h-10 object-contain brightness-0 invert" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
