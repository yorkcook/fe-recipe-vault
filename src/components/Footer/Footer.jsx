import React from 'react'
// import {
//     faFacebook,
//     faTwitter,
//     faGithubAlt,
//     faYouTube,
//     faInstagram,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'

function Footer() {
	return (
		<footer>
			<section className='ft-main'>
				<div className='ft-main-item'>
					<h2 className='ft-title'>About</h2>
					<ul>
						<li>
							<a href='/'>Services</a>
						</li>
						<li>
							<a href='/'>Portfolio</a>
						</li>
						<li>
							<a href='/'>Pricing</a>
						</li>
						<li>
							<a href='/'>Customers</a>
						</li>
						<li>
							<a href='/'>Careers</a>
						</li>
					</ul>
				</div>
				<div className='ft-main-item'>
					<h2 className='ft-title'>Resources</h2>
					<ul>
						<li>
							<a href='/'>Docs</a>
						</li>
						<li>
							<a href='/'>Blog</a>
						</li>
						<li>
							<a href='/'>eBooks</a>
						</li>
						<li>
							<a href='/'>Webinars</a>
						</li>
					</ul>
				</div>
				<div className='ft-main-item'>
					<h2 className='ft-title'>Contact</h2>
					<ul>
						<li>
							<a href='/'>Help</a>
						</li>
						<li>
							<a href='/'>Sales</a>
						</li>
						<li>
							<a href='/'>Advertise</a>
						</li>
					</ul>
				</div>
				<div className='ft-main-item'>
					<h2 className='ft-title'>Stay Updated</h2>
					<p>Subscribe to our newsletter to get our latest news.</p>
					<form>
						<input
							type='email'
							name='email'
							placeholder='Enter email address'
						/>
						<input type='submit' value='Subscribe' />
					</form>
				</div>
			</section>

			{/* <section className="ft-social">
                        <ul className="ft-social-list">
                            <li><a href="/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faYouTube}></FontAwesomeIcon></a></li>
                            <li><a href="/"><FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon></a></li>
                        </ul>
                    </section> */}

			<section className='ft-legal'>
				<ul className='ft-legal-list'>
					<li>
						<a href='/' style={{ color: 'black' }}>
							Terms &amp; Conditions
						</a>
					</li>
					<li>
						<a href='/' style={{ color: 'black' }}>
							Privacy Policy
						</a>
					</li>
					<li>&copy; 2019 Copyright Recipe Vault Inc.</li>
				</ul>
			</section>
		</footer>
	)
}

export default Footer
