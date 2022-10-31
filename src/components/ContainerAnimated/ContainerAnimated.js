import { motion } from 'framer-motion';

const ContainerAnimated = ({
  children, className, onMouseEnter, transition,
}) => {
  return (
    <motion.div
    whileInView={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    whileHover={{ scale: 1.1 }}
    className={className} onMouseEnter={onMouseEnter} transition={transition}>
      {children}
    </motion.div>
  );
};

export default ContainerAnimated;
