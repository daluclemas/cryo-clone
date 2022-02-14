import React from 'react';
// import '../styles/sections/Testimonial.scss'
import '../styles/css/Testimonial.css'
import Title from '../components/Title'
import Testimonials from '../components/Testimonials';
import {UseScroll} from '../components/UseScroll';
import {motion} from 'framer-motion';
import {contentAnimate, why, cards} from '../Animation';


const Testimonial = () => {

	const [element, controls] = UseScroll();


  return (
		<div className='testimonial-container' ref={element}>
			<motion.div className="testimonials" animate={controls} initial="hidden" variants={contentAnimate}>
				
				<motion.div className="testimonial-texts" variants={why}>
					<Title title="testimonials" color="blue" lineCenter={true} />

					<p>
						see what our clients are saying about us
					</p>
				</motion.div>

				<div className="testimonial-cards">
					<Testimonials content="the best of the net! Software development saved my business. I use software development often. I am really satisfied with my software development." name="trushit vyas" title="co-founder"
					animate={cards}
					 />

					<Testimonials content="mobile application developer is exactly what our business has been lacking. I have gotten at least 50 times the value from mobile application." name="kishan seth" title="founder &amp; CEO"
						animate={cards}
					 />

					<Testimonials content="logo design is the next killer app. We've used logo design for the last five years. Best Product. Ever! Definitely worth the investment" name="romit gandhi" title="founder"
						animate={cards}
					 />
				</div>

			</motion.div>

		</div>   
  );
};

export default Testimonial;
