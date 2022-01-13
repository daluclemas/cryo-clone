import React, {useState, useRef} from 'react'
import './Searchbar.css'

const Searchbar = ({searchTerm}) => {

	const [searchText, setSearchText] = useState('');

	const [toggle, setToggle] = useState(false);

	const dateRef = useRef();

	const handleChange = (e) =>{
		setSearchText(e.target.value);
	}

	const handleSubmit = (e)=>{
		e.preventDefault()

		searchTerm(searchText);
		
	}

	const handleClick = () =>{

		setToggle(!toggle);

		dateRef.current.focus();

		

	}





    return (
        <div className='inputContainer'>

					<h3>discover...</h3>

					<div className="formcontainer">
						
						<form onSubmit={handleSubmit}>

							<div className={`dateInputContainer ${toggle ? "active": ''}`}>
								<input type="text" className='dateInput' placeholder="yy-mm-dd..." ref={dateRef} onChange={handleChange} />
							</div>

							<div className="formbtnContainer">
								<button className={`formbtn ${toggle ? "active": ''}`} onClick={handleClick} >
									<i className="fas fa-search"></i>
								</button>
							</div>

						</form>

					</div>

          
            
        </div>
    )
}

export default Searchbar
