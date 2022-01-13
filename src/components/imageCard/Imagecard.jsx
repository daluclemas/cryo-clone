import React, {useState} from 'react';
import './Imagecard.css'

const Imagecard = ({url,camera, rover,date,full_name}) => {


	const [heartToggle, setHeartToggle] = useState(false);

	const handleClick = () =>{

		setHeartToggle(!heartToggle)
	}

  return (
    <div className='imagecard'>

			<div className="photocontainer">
				<img src={url} alt="nasaimage" />
			</div>

			<div className="cardtexts">
				<p>camera name : <span>{camera}</span></p>

				<p>full-name : <span>{full_name}</span></p>

				<p>rover : <span>{rover}</span></p>

				<div className="likeButton">
					<div className="likebtn">
						<button onClick={handleClick}>
							<i className={`${heartToggle ? 'fas' : 'far'} fa-heart`}></i>
						</button>
					</div>
					<p>date : <span>{date}</span></p>
				</div>
			</div>

            
    </div>
  )
}

export default Imagecard
