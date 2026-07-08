import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-950 flex flex-col justify-center items-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
        className="text-6xl font-extrabold text-blue-500"
      >
        HD
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className="text-2xl text-white mt-4 font-semibold"
      >
        Hangeior Donald
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
        }}
        className="text-gray-400 mt-4"
      >
        Loading Portfolio...
      </motion.p>

      {/* Animated Progress Bar */}

      <div className="w-64 h-2 bg-gray-800 rounded-full mt-10 overflow-hidden">

        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
          }}
        />

      </div>
    </motion.div>
  );
}

export default LoadingScreen;