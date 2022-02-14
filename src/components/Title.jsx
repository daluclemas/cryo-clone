import React from 'react';
// import '../styles/components/Title.scss'
import '../styles/css/Title.css'

const Title = ({title , color , lineCenter = false}) => {
  return (
		<div className={`title ${lineCenter ? 'center' : ''}`}>
			<h2>{title}</h2>

			<div className={`${color}`}>
				<span></span>
			</div>

		</div>
  );
};

export default Title;
