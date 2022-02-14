import React from 'react';
import '../styles/components/BrandName.scss';

const BrandName = ({change}) => {
  return (

	<div className={`brand ${change ? 'white' : ''}`}>
		<span>cryo</span>
	</div>

	);
};

export default BrandName;
