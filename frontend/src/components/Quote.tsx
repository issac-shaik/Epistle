import { AuroraBackground } from "./ui/AuroraBackground";

import { motion } from "framer-motion";

const Quote = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      ></motion.div>
    </AuroraBackground>
  );
};

export default Quote;
