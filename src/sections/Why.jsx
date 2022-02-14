import React from 'react';
// import '../styles/sections/Why.scss';
import '../styles/css/Why.css';
import Title from '../components/Title';
import {GoPlay} from 'react-icons/go';
import {motion} from 'framer-motion';
import {UseScroll} from '../components/UseScroll';
import {contentAnimate, whyTitle, headerContent, why} from '../Animation'

const Why = () => {

  const [element, controls] = UseScroll();


  return (
   <div className="why-container" ref={element}>

		<motion.div className="why-content"
      variants={contentAnimate}
      animate={controls}
      inital="hidden"
    >

      <motion.div className="title-and-subtitle"
        variants={whyTitle}
      >
        <Title title="why CRYO ?" color="pink" lineCenter={true} />
 
          <p>
            always stay updated with the technologies thus we help our clients by giving te best solutions for their needs.
          </p>

      </motion.div>

      <div className="video-container">
        
        <motion.div className="video" variants={headerContent}>

          <div className="play">
            <GoPlay /> 
          </div>

        </motion.div>

        <motion.div className="unordered-list" variants={why}>
          <ul className="list-group">

            <li className="list-items">
              over 10+ years of industry wide experience
            </li>

            <li className="list-items">
              provide solutions to our multiple global clients or website traffic generation and workflow
            </li>

            <li className="list-items">
              strong learn of 150+ creative people
            </li>

            <li className="list-items">
              99% adhere to service level contract
            </li>

            <li className="list-items">
              ready to receive service request
            </li>
          </ul>
        </motion.div>

      </div>

    </motion.div>
	 </div>   
  );
};

export default Why;
