import React, {useState} from 'react';
import {BiUpArrow} from 'react-icons/bi';
// import '../styles/sections/Scroll.scss';
import '../styles/css/Scroll.css';

const Scroll = () => {
	const [visible, setVisible] = useState(false);

	window.addEventListener('scroll',()=>{

		const scrolled = document.documentElement.scrollTop;

		if(scrolled > 500){
			setVisible(true);

		}else{
			setVisible(false);
		}

	});

	const toTop = () =>{
		window.scrollTo({
			top: 0,
			behaviour: "smooth"
		})
	}

  return (<>

		{visible && 
			(<div className='scroll' onClick={toTop}>
				<BiUpArrow />
			</div>)
		}

		</>
	);
};

export default Scroll;
