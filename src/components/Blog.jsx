import React from 'react';
// import '../styles/components/Blog.scss';
import '../styles/css/Blog.css';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import Button from '../components/Button';
import {motion} from 'framer-motion'

const Blog = ({img, content, subcontent, blog}) => {
  return (
		<motion.div  className='blog-container' variants={blog}>

			<div className="blog-content">
				
				<div className="blog-img">
					<img src={img} alt="blog image" />
				</div>

				<div className="blog-texts-container">
					<h4>{content}</h4>
					<p>{subcontent}</p>
				</div>

				<Button color="inverse" content="read more" icon={<HiOutlineArrowNarrowRight />} />
			</div>
		
		</motion.div>
	);
};

export default Blog;
