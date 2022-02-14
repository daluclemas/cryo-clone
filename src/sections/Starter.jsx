import React from 'react';
// import '../styles/sections/Starter.scss';
import '../styles/css/Starter.css';
import Navbar from '../components/Navbar'
import Button from '../components/Button';
import webbuilder from '../assets/images/webbuilder.png'
import {GoPlay} from 'react-icons/go';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import {motion} from 'framer-motion';
import { UseScroll } from '../components/UseScroll';
import { contentAnimate, headerContent, imageAnimation } from '../Animation';

const Starter = () => {

  const [element, controls] = UseScroll()

  return (
    <div className="main-container">
			<Navbar />
      <motion.div className="content" 
        ref={element}           
        variants={contentAnimate} 
        animate={controls} 
        initial="hidden" 
      >

        <motion.div className="text-contents "  
          variants={headerContent}
        >

          <div className="text-container">
            <h1>
            we provide solutions to help you build or grow your business!</h1>

            <p 
            >
              a professional web and mobile app development agency with over 100+ web and app developed. <span>we</span> provide high-quality service in web and mobile app development as well as in design.
            </p>
          </div>

          <div className="btn-containers" >
            <Button content='watch video' color='secondblue' icon={<GoPlay />}  />
            <Button content='request quote' color='pink' icon={<HiOutlineArrowNarrowRight />}  />
          </div>

        </motion.div>

        <motion.div className="image-container" variants={imageAnimation}>
          <img src={webbuilder} alt="web-builder" />
        </motion.div>

      </motion.div>

		</div> 
  );
};

export default Starter;
