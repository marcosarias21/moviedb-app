import { motion } from 'framer-motion';
import './hero.scss';

const Hero = ({ image }) => {
  if (!image) return null;
  const img = `https://image.tmdb.org/t/p/original//${image}`;
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} key={img} className='section-hero'>
      <img className='hero-style' src={img} alt={img} />
    </motion.section>
  );
};

export default Hero;
