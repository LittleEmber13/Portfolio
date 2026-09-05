import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { getProjectBySlug } from "../data/projects";

export default function ProjectDetail() {
    const { slug } = useParams();
    const { t } = useTranslation();
    const project = getProjectBySlug(slug);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    const features = t(`projects.items.${slug}.detail.features`, { returnObjects: true });
    const featureList = Array.isArray(features) ? features : [];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full pt-24 pb-16">
            <div className="solid-background p-8 w-full flex flex-col gap-8">
                <img
                    src={project.image}
                    alt={t(`projects.items.${slug}.name`)}
                    className="w-full max-h-[420px] object-cover rounded-lg"
                />
                <div className="flex items-center gap-2 flex-wrap">
                    {project.openSource ? (
                        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] px-2 text-xs font-medium text-[var(--color-primary)]">
                            <span>{t('project.open_source')}</span>
                        </div>
                    ) : (
                        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-secondary)] px-2 text-xs font-medium text-[var(--color-secondary)]">
                            <span>{t('project.proprietary')}</span>
                        </div>
                    )}
                    {project.technologies.map((tech, index) => (
                        <div key={index} className="icon-button w-[28px] h-[28px]">
                            <img src={tech} alt="" className="w-1/2 h-1/2 object-contain" />
                        </div>
                    ))}
                </div>

                <div>
                    <h3 className="mb-4">{t('project_detail.overview')}</h3>
                    <p className="text-[var(--color-body)]">{t(`projects.items.${slug}.detail.overview`)}</p>
                </div>

                {featureList.length > 0 && (
                    <div>
                        <h3 className="mb-4">{t('project_detail.features')}</h3>
                        <ul className="list-disc list-inside flex flex-col gap-2 text-[var(--color-body)]">
                            {featureList.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex items-center gap-6 flex-wrap pt-2">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
                        >
                            <ExternalLink size={16} />
                            {t('projects.source_code')}
                        </a>
                    )}
                    {slug === "keepassux" && (
                        <Link
                            to={`/project/${slug}/privacy`}
                            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
                        >
                            {t('projects.privacy_policy')}
                        </Link>
                    )}
                    {project.websiteUrl && (
                        <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline"
                        >
                            <ExternalLink size={16} />
                            {t('project_detail.visit_website')}
                        </a>
                    )}
                </div>
            </div>
        </motion.section>
    );
}
