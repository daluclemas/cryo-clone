import React, {useState} from 'react';
import BrandName from '../components/BrandName';
// import '../styles/sections/Footer.scss';
import '../styles/css/Footer.css';
import {AiOutlineSend } from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import {UseScroll} from '../components/UseScroll';
import {footer, fromTop, fromDown,blog} from '../Animation';
import {motion} from 'framer-motion';

const Footer = () => {

	const [element, controls] = UseScroll();

	const [value, setValue] = useState('');

	const handleChange = (e) =>{
		setValue(e.target.value);
	}


  return (
		<div className="footer" ref={element}>

			<motion.footer animate={controls} variants={footer} initial="hidden">

				<div className="top-footer">

					<motion.div className="newsletter-container" variants={fromTop} >

						<div className="cryo-logo-container">
							<BrandName change={true} color="white" />

							<p>
								join our newsletter to get updated with our offers &amp; discounts.
							</p>

						</div>

						<div className="input-container">
							<div className="inputs">
								<input type="email" placeholder='please enter email...' onChange={handleChange} value={value} />
							</div>

							<div className="input-button">
								<button className="btn">
									<AiOutlineSend />
								</button>
							</div>


						</div>

					</motion.div>

					{/* <div className="quick-links"> */}

						<motion.div className="list-group" variants={fromDown}>
							<p>quick links</p>
							
							<ul>
								<li><a href="#">about</a></li>
								<li><a href="#">testimonial</a></li>
								<li><a href="#">contact us</a></li>
								<li><a href="#">portfolio</a></li>
								<li><a href="#">career</a></li>
								<li><a href="#">blog</a></li>
								<li><a href="#">terms &amp; conditions</a></li>
								<li><a href="#">privacy policy</a></li>
							</ul>
							
						</motion.div>

						<motion.div className="list-group" variants={fromTop}>
							<p>industries</p>

							<ul>
								<li><a href="#">website development</a></li>
								<li><a href="#">mobile app development</a></li>
								<li><a href="#">website design</a></li>
								<li><a href="#">mobile app design</a></li>
								<li><a href="#">digital marketing</a></li>
								<li><a href="#">graphic design</a></li>
								<li><a href="#"><span>ios</span> app development</a></li>
							</ul>
						</motion.div>

						<motion.div className="list-group" variants={fromDown}>
							<p>
								get in touch
							</p>

							<ul>

								<li>
									<MdEmail /> 
									<div>
										<h5>email</h5>
										<a href="mailto:chidaluanukam@gmail.com"><span>chidaluanukam@gmail.com</span></a>
									</div>
								</li>
								
								<li>
									<FaPhoneAlt /> 
									<div>
										<h5>phone</h5>
										<a href="tel:+2347053328452">+2347053328452</a>
									</div>
								</li>
								
								<li>
									<ImLocation /> 
									<div>
										<h5>location</h5>
										<a href="#">no 58 mbano street</a>
									</div>
								</li>

							</ul>
						</motion.div>

					{/* </div> */}

				</div>

				<motion.div className="copyright-container" variants={blog}>
					<p>
						copyright &copy; 2022. <span>all rights reserved.</span>
					</p>

					<ul>
						<li>
							<FaFacebookF />
						</li>
						<li>
							<FaInstagram />
						</li>
						<li>
							<FaLinkedin />
						</li>
						<li>
							<FaTwitter />
						</li>
					</ul>

				</motion.div>

			</motion.footer>

		</div>
	);
};

export default Footer;
