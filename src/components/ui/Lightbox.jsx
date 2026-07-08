import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Lightbox({ image, title, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>

      {image && (

        <motion.div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-6"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.img
            src={image}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          />

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default Lightbox;