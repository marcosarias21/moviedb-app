import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
  <motion.section initial={{ width: 0 }} animate={{ width: '100%' }} exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
    {children}
  </motion.section>
  );
};

export default Layout;
