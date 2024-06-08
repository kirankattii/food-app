import React from "react"
import "./footer.css"
import { assets } from "../../assets/assets"

const Footer = () => {
	return (
		<div
			className="footer"
			id="footer"
		>
			<div className="footer-content">
				<div className="footer-content-left">
					<img
						src={assets.logo}
						alt=""
					/>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
						perspiciatis reprehenderit, fuga sapiente officiis suscipit libero
						ut perferendis assumenda blanditiis, eligendi deserunt, dolores
						debitis minima? Sunt iure vero ut officiis!
					</p>
					<div className="footer-social-icons">
						<img
							src={assets.facebook_icon}
							alt=""
						/>
						<img
							src={assets.twitter_icon}
							alt=""
						/>
						<img
							src={assets.linkedin_icon}
							alt=""
						/>
					</div>
				</div>
				<div className="footer-content-center">
					<h2>Company</h2>
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy policy</li>
					</ul>
				</div>
				<div className="footer-content-right">
					<h2>GET IN TOUCH</h2>
					<ul>
						<li>+1-121-456-7850</li>
						<li>Contact@tomato.com</li>
					</ul>
				</div>
			</div>
			<hr />
			<p className="footer-copyright">
				Copy Right 2024 @ Tomato.com - All Rights Reserved.+
			</p>
		</div>
	)
}

export default Footer
