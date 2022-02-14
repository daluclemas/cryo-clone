import React from 'react';
// import '../styles/components/Testimonials.scss';
import '../styles/css/Testimonials.css';
import {motion} from 'framer-motion'

const Testimonials = ({content, name, title, animate}) => {
  return (
    <motion.div className='testimonials-container' variants={animate}>
      <div className="quote">
        <span>&#10077;</span>
      </div>

      <p>
        {content}
      </p>

      <div className="author">
        <h3>{name}</h3>
        <div>{title}</div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
