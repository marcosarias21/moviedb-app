import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {children}
  </motion.section>
  );
};

export default Layout;
