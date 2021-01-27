import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const messageVariant = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0px',
    opacity: 1,
    transition: {
      delay: 2.5,
    },
  },
};

const Header = ({ quote }) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={messageVariant}
      transition={{ ease: 'easeOut', duration: 2 }}
      className='header'
    >
      <div className='header__title'>
        <h2 className='header__quote'>
          <span>
            {quote.text} {quote.author}
          </span>
        </h2>
      </div>
    </motion.div>
  );
};

export default Header;
