import React from 'react';
import logo from '../images/logo.png';
import logo_2x from '../images/logo@2x.png';
import { navigationLinks } from '../helpers/variables';

const Header = (props) => {
	return (
		<header className="header">
			<div className="header-wrapper">
				<div className="container">
					<nav className="nav home-main__nav">
						<ul className="home-main__nav-list">
							<li className="home-main__nav-item">
								<a href="" className="home-main__nav-link"></a>
							</li>
						</ul>
					</nav>
					<a href="/" className="logo home-main__logo">
						<img src={logo} srcSet={`${logo} 1x, ${logo_2x} 2x`} alt="" />
					</a>
					<nav className="navigation home-main__navigation">
						<ul className="home-main__nav-list">
							<li className="home-main__nav-item">
								<a href="" className="home-main__nav-link"></a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			{/* <MobileMenu /> */}
		</header>
	);
};

export default Header;
