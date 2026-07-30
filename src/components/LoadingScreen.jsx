import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-white flex flex-col justify-center items-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Spinning Logo */}

      <motion.img
        src={logo}
        alt="Terhemen Donald Logo"
        className="w-28 h-28 object-contain"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Portfolio Name */}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="text-3xl font-bold text-gray-800 mt-8"
      >
        Terhemen Donald Portfolio
      </motion.h2>

      {/* Loading Text */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.6,
        }}
        className="text-gray-500 mt-3 text-lg"
      >
        Loading...
      </motion.p>

      {/* Progress Bar */}

      <div className="w-72 h-2 bg-gray-200 rounded-full mt-10 overflow-hidden">

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