import React, {useState} from 'react';
import './Imagecard.css'
import {motion} from 'framer-motion'

const Imagecard = ({url,camera, rover,date,full_name}) => {


	const [heartToggle, setHeartToggle] = useState(false);

	const handleClick = () =>{

		setHeartToggle(!heartToggle)
	}

	const subparent ={
		visible:{
			opacity:1,
			transition:{
				when:"beforeChildren",
				staggerChildren:0.3,
				duration: 1.5
			}
		},

		hidden:{
			opacity:0
		}
	}

	const child = {
		visible:{
			opacity: 1
		},
		hidden:{
			opacity:0
		}
	}

  return (
    <motion.div className='imagecard'
			animate="visible"
			initial="hidden"
			variants={subparent}  
		>

			<motion.div className="photocontainer" variants={child}>
				<img src={url} alt="nasaimage" />
			</motion.div>

			<motion.div className="cardtexts">
				<motion.p variants={child}>camera name : <span>{camera}</span></motion.p>

				<motion.p variants={child}>full-name : <span>{full_name}</span></motion.p>

				<motion.p variants={child}>rover : <span>{rover}</span></motion.p>

				<div className="likeButton">
					<div className="likebtn">
						<motion.button onClick={handleClick} variants={child}>
							<i className={`${heartToggle ? 'fas' : 'far'} fa-heart`}></i>
						</motion.button>
					</div>
					<motion.p variants={child}>date : <span>{date}</span></motion.p>
				</div>
			</motion.div>

            
    </motion.div>
  )
}

export default Imagecard
