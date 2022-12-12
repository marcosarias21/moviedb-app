import { motion } from 'framer-motion';
import './layout.scss';

const Layout = ({ children }) => {
  return (
  <motion.section className='layout-content' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    {children}
  </motion.section>
  );
};

export default Layout;
