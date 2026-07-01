import prefab from "../assets/prefab.jpg";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export default function Project({ slug, name, description, technologies, openSource, image, githubUrl }) {
    const { t } = useTranslation();
    return (
        <motion.div className="flex flex-col w-full text-start !p-0 card break-inside-avoid mb-12"
            initial={{ scale: 1 }}
            whileHover={{
                scale: 1.025,
                transition: { duration: 0.1 },
            }} >
            <img
                src={image ?? prefab}
                alt="Prefab"
                className="w-full contain-content block rounded-t-lg"
            />
            <div className="p-[16px] text-start">
                <div className="flex">
                    <h4 className="pr-4">{name}</h4>
                    {openSource == true ? (
                        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] px-2 text-xs font-medium text-[var(--color-primary)]">
                            <span>{t('project.open_source')}</span>
                        </div>
                    ) : (
                        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-secondary)] px-2 text-xs font-medium text-[var(--color-secondary)]">
                            <span>{t('project.proprietary')}</span>
                        </div>
                    )}
                </div>
                <br />
                <p className="text-[var(--color-body)]">{description}</p>
                <div className="pb-4 flex items-center gap-4">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-primary)] hover:underline"
                        >
                            {t('projects.source_code')}
                        </a>
                    )}
                    {slug && (
                        <Link
                            to={`/project/${slug}`}
                            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-br from-[var(--color-primary-light)] via-[var(--color-primary)] to-[var(--color-primary)] text-[var(--color-background)] hover:brightness-110 transition"
                        >
                            {t('projects.view_more')}
                        </Link>
                    )}
                </div>
                <div className="flex items-center gap-[4px]">
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech}
                            initial={{ scale: 1 }}
                            whileHover={{
                                scale: 1.025,
                                transition: { duration: 0.1 },
                            }} >
                            <div className="icon-button w-[24px] h-[24px]">
                                <img
                                    src={tech}
                                    alt={name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
