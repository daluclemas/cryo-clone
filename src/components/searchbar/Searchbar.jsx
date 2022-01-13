import React, {useState, useRef} from 'react'
import './Searchbar.css'
import {motion} from 'framer-motion'

const Searchbar = ({searchTerm}) => {

	const [searchText, setSearchText] = useState('');

	const [toggle, setToggle] = useState(false);

	const dateRef = useRef();

	// onChange event
	const handleChange = (e) =>{
		setSearchText(e.target.value);
	}

	// on submit
	const handleSubmit = (e)=>{
		e.preventDefault()

		searchTerm(searchText);
		
	}

	// onclick event
	const handleClick = () =>{

		setToggle(true);

		dateRef.current.focus();	

	}

	// framer variants
	const parent = {
		visible:{
			x:0,
			opacity:1,
			transition:{
				when:"beforeChildren",
				staggerChildren:'0.3',
				duration:1.5
			}
		},
		hidden:{
			x:-1000,
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
        <motion.div className='inputContainer' 
					animate="visible"
					initial="hidden"
					variants={parent}
				>

					<motion.h3 variants={child}>discover...</motion.h3>

					<motion.div className="formcontainer" >
						
						<motion.form onSubmit={handleSubmit} variants={child}>

							<div className={`dateInputContainer ${toggle ? "active": ''}`}>
								<input type="text" className='dateInput' placeholder="yy-mm-dd..." ref={dateRef} onChange={handleChange} />
							</div>

							<div className="formbtnContainer">
								<button className={`formbtn ${toggle ? "active": ''}`} onClick={handleClick} >
									<i className="fas fa-search"></i>
								</button>
							</div>

						</motion.form>

					</motion.div>

          
            
        </motion.div>
    )
}

export default Searchbar
