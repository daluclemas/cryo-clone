import React from 'react';
import Blog from '../components/Blog';
import Title from '../components/Title';
// import '../styles/sections/Blogs.scss';
import '../styles/css/Blogs.css';
import remote from '../assets/images/remote.png';
import Button from '../components/Button';
import {UseScroll} from '../components/UseScroll';
import {motion} from 'framer-motion';
import {blogContainer, blog} from '../Animation';

const Blogs = () => {

	const [element, controls] = UseScroll();


  return (
    <div className='blogs-container' ref={element}>

			<motion.div className="blogs-content" animate={controls} initial="hidden" variants={blogContainer}>

				<motion.div className="blogs-text-container" variants={blog}>

					<Title title="blogs" color='pink' lineCenter={true} />

					<p>
						insights and advice from our experts.
					</p>

				</motion.div>

				<div className="blogs">

					<Blog 
					img={remote} 
					content="top list of mistakes to avoid during MVP development" subcontent='during the eight years i spent as an engineering manager, i regularly tracked how i spent my time. As a startup engineering manager , i was..'  blog={blog}
					/>

					<Blog 
					img={remote}
					content='a day in the life of an engineering manager'
					subcontent='when there appears an idea to create a startup have to take into account all the risks you will face and evaluate them thoughfully. Also as a rule...' blog={blog}
					/>

					<Blog
					img={remote}
					content="how to build a strong remote work culture"
					subcontent="Kishan Sheth is the company VP of Talent Operations reponsible for matching some of the world's greatest freelancers with companies who..." blog={blog}
					/>

				</div>

				<Button content="view all" color="blue" animate={blog} />

			</motion.div>
		
		</div> 
  );
};

export default Blogs;
