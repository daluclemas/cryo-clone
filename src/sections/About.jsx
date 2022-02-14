import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Title from '../components/Title';
// import '../styles/sections/About.scss';
import '../styles/css/About.css'
import { HiLightBulb } from 'react-icons/hi';
import {BsCalendar} from 'react-icons/bs';
import {BiSupport} from 'react-icons/bi';
import {SiGooglemessages} from 'react-icons/si';
import {motion} from 'framer-motion';
import {UseScroll} from '../components/UseScroll';
import { headerContent, cardContainer, cards } from '../Animation';

const About = () => {

	const [element, controls] = UseScroll();


  return (
		<div className='about-container' ref={element} >

			<motion.div className="about-content" >
				

				<motion.div className="about-text-btn"
					animate={controls} 
					initial="hidden" 
					variants={headerContent} 
				>
					<Title title="about CRYO" color="blue" />
					
					<p >
						we believe that everyone deserves to have a website or online store. <span>innovation </span>and simplicity make us happy. <span>our </span> mission is to help people achieve  what they are passionate about.

					</p>

					<p>
						we are excited to simplify <span className="seo">seo</span> for everyone through software ,education, or community.
					</p>

					<Button content='WHY CRYO ?' color="blue" fontsize="fontsize"  />

				</motion.div>

				<motion.div className="cards-container" 
					variants={cardContainer}
					animate={controls}
					initial="hidden"
				>
					<Card icon={<HiLightBulb />} title="innovative ideas" animatecard={cards} />
					<Card icon={<BsCalendar />} title="planning"  animatecard={cards} />
					<Card icon={<BiSupport />} title="communication"  animatecard={cards}  />
					<Card icon={<SiGooglemessages />} title="24'7 support"  animatecard={cards} />
				</motion.div>

			</motion.div>

		</div>
  );
};

export default About;
