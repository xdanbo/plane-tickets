import React from 'react';

import logo from '../../assets/i/logo.png';

import './logo.scss';

const Logo = () => {
	return (
		<div className="logo-w">
			<img src={logo} alt="logo" />
		</div>
	);
};

export default Logo;