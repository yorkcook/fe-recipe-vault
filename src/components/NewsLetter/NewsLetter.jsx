import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
	return (
		<aside>
			<div id='subscribebox'>
				<h2 style={{ fontSize: '50px', color: 'white' }}>
					Recipe Vault
				</h2>
				<div class='follow-subscribe-social'>
					<ul>
						<li>
							<a href='#' target='_blank'>
								<i class='fa fa-facebook'></i>
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<i class='fa fa-twitter'></i>
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<i class='fa fa-linkedin'></i>
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<i class='fa fa-google'></i>
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<i class='fa fa-pinterest-p'></i>
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<i class='fa fa-dribbble'></i>
							</a>
						</li>
						<li>
							<a href='#' target='_blank'>
								<i class='fa fa-instagram'></i>
							</a>
						</li>
					</ul>
				</div>
				<img
					border='0'
					alt='Subcribe'
					src='http://dateinacrate.com/wp-content/uploads/2015/06/icon-subscribe.png'
					width='100'
					height='100'
				/>
				<p>Subscribe to our Newsletter</p>
				<form
					class='subscribe'
					action='https://feedburner.google.com/fb/a/mailverify?uri=Msdesign92'
					method='post'
					onsubmit="window.open('https://feedburner.google.com/fb/a/mailverify?uri=Msdesign92, 'popupwindow', 'scrollbars=yes,width=550,height=520');return true"
					target='popupwindow'>
					<input name='uri' type='hidden' value='YOUR-USER-NAME' />
					<input name='loc' type='hidden' value='en_US' />
					<input
						class='subscribe-email'
						type='text'
						name='email'
						onblur='if (this.value == "") {this.value = "Your Email";}'
						onfocus='if (this.value == "Your Email") {this.value = "";}'
						value='Your Email'
					/>
					<input
						class='subscribe-button'
						type='submit'
						value='Subscribe'
					/>
				</form>
				<p style={{ fontSize: '60%' }}>
					We will not share your information with anyone
				</p>
			</div>
		</aside>
	)
}

export default NewsLetter
