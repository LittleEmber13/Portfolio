import { motion } from "framer-motion";

export default function Skill({ name, imgSrc, size }) {
    return (
        <div className="flex flex-col items-center gap-2 w-[60px]">
            <motion.div
                initial={{ scale: 1 }}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1 },
                }} >
                <div
                    className="icon-button"
                    style={{
                        width: size,
                        height: size,
                    }}>
                    <img src={imgSrc} alt={name} className="w-1/2 h-1/2 object-contain" />
                </div>
            </motion.div>
            <p className="m-0 text-sm text-center">{name}</p>
        </div>
    );
}
