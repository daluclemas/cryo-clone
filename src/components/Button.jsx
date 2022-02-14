import React from 'react';
// import '../styles/components/Button.scss';
import '../styles/css/Button.css';
import {motion} from "framer-motion";

const Button = ({content, icon , color, fontsize, animate}) => {
  return (
		<motion.div className={`button-container ${color} ${fontsize} `} variants={animate}>
			<button className={`${color}  ${fontsize}`} >
				{content} {icon} 
			</button>
		</motion.div>
  );
};

export default Button;
