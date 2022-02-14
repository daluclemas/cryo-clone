import React, {useState} from 'react';
import BrandName from './BrandName';
import {	FaBars, FaTimes } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Starter from '../sections/Starter';
import Button from './Button';
import '../styles/components/Navbar.scss'
import {navbarAnimation} from '../Animation'

const Navbar = () => {

	const [navToggle, setNavToggle] = useState(false);

	const toggle = () =>{

		setNavToggle(!navToggle);

	}



  return (
		<Router>

			<div className={`navbar ${ navToggle ? 'active' : '' }`} 	
			>

				<div className="header-texts">
					
					<BrandName change={false} />

					<div className="icons">

						{navToggle ? (
							<FaTimes onClick={toggle} />
						) : (
							<FaBars onClick={toggle} />

						)}
								
					</div>

				</div>

				<nav>
					<ul className="nav-items">

						<li className="nav-links">
							<Link to="#">about</Link>
						</li>

						<li className="nav-links">
							<Link to="">services</Link>
						</li>

						<li className="nav-links">
							<Link to="#">testimonial</Link>
						</li>

						<li className="nav-links">
							<Link to="#">blog</Link>
						</li>

						<li className="nav-links">
							<Link to="#">
								<Button content='contact' color='blue' />
							</Link>
						</li>

					</ul>
				</nav>

			</div> 

			<Routes>
				<Route path='#' exact element={<Starter />} />
				<Route path='#' exact element={<Starter />} />
				<Route path='#' exact element={<Starter />} />
				<Route path='#' exact element={<Starter />} />
				<Route path='#' exact element={<Starter />} />
			</Routes>

		</Router>
  );
};

export default Navbar;
