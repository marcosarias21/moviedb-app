import { motion } from 'framer-motion';

const ContainerAnimated = ({
  children, key, className, onMouseEnter, transition,
}) => {
  return (
    <motion.div
    key={key} initial={{ opacity: 0 }}
    animate={{ opacity: 1 }} whileHover={{ scale: 1.1 }}
    className={className} onMouseEnter={onMouseEnter} transition={transition}>
      {children}
    </motion.div>
  );
};

export default ContainerAnimated;
