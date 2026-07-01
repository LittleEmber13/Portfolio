import { motion } from "framer-motion";

export default function Marquee({ items, direction = "left", speed = 30, size = 40 }) {
    const track = [...items, ...items];

    return (
        <div
            className="overflow-hidden w-full"
            style={{
                WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
                maskImage: "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            }}
        >
            <motion.div
                className="flex w-max gap-6"
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ duration: speed, ease: "linear", repeat: Infinity }}
            >
                {track.map((tech, i) => (
                    <div key={`${tech.name}-${i}`} className="flex flex-col items-center gap-2 shrink-0" style={{ width: size + 24 }}>
                        <div className="icon-button" style={{ width: size, height: size }}>
                            <img src={tech.imgSrc} alt={tech.name} className="w-1/2 h-1/2 object-contain" />
                        </div>
                        <p className="m-0 text-xs text-center text-[var(--color-body)]">{tech.name}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
