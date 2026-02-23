import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shodanHero from "@/assets/shodan-hero.png";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 600); // wait for exit animation
    }, 2200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#0d0d12" }}
        >
          {/* Radial glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(circle, hsl(43 74% 52% / 0.4) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Logo */}
          <motion.img
            src={shodanHero}
            alt="ShodanExame"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain relative z-10"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* App name */}
          <motion.h1
            className="mt-6 text-2xl sm:text-3xl font-bold tracking-wider relative z-10"
            style={{ color: "hsl(43 74% 52%)", fontFamily: "'Noto Serif JP', serif" }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            ShodanExame
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-2 text-sm tracking-widest uppercase relative z-10"
            style={{ color: "hsl(45 20% 92% / 0.5)" }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          >
            Preparação para Faixa Preta
          </motion.p>

          {/* Loading bar */}
          <motion.div
            className="mt-10 h-0.5 rounded-full relative z-10 overflow-hidden"
            style={{ width: 120, backgroundColor: "hsl(43 74% 52% / 0.15)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "hsl(43 74% 52%)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.9, duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
