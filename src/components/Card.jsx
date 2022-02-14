import React from 'react';
// import '../styles/components/Card.scss';
import '../styles/css/Card.css';
import {motion} from 'framer-motion'

const Card = ({icon, title, animatecard}) => {
  return (
    <motion.div className="card-container"
			variants={animatecard} 
		>
			
			<div className="logo">
				{icon}
			</div>

			<h3>{title}</h3>
		</motion.div> 
  );
};

export default Card;
