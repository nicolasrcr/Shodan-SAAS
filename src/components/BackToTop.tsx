import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-br from-primary to-[hsl(40,65%,40%)] text-background shadow-[0_0_40px_hsla(43,74%,52%,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_hsla(43,74%,52%,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-8 md:right-8"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export default BackToTop;
