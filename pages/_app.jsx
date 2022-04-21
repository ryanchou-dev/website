import "../styles/globals.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0.9,
        },
        animate: {
          opacity: 1,
        },
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
