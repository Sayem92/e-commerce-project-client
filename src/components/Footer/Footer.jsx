import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
	return (

		<footer className="px-4 divide-y bg-gray-800 text-gray-100 dark:bg-black dark:border-t">
			<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
				<div className="lg:w-1/3">
					<Link to="/" className="flex justify-center space-x-3 lg:justify-start">
						<div className="flex items-center justify-center w-16 h-16 rounded-full">

							<img src={logo} className='w-16' alt="" />
						</div>
						<span className="self-center text-2xl font-semibold"> Smart Commerce</span>
					</Link>
				</div>
				<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
					<div className="space-y-3">
						<h3 className="tracking-wide uppercase text-gray-50">Product</h3>
						<ul className="space-y-1">
							<li>
								<Link to="/">Blog</Link>
							</li>
							<li>
								<Link rel="noopener noreferrer" to="/">Integrations</Link>
							</li>
							<li>
								<Link rel="noopener noreferrer" to="/">Pricing</Link>
							</li>
							<li>
								<Link to="/">FAQ</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="tracking-wide uppercase text-gray-50">Company</h3>
						<ul className="space-y-1">
							<li>
								<Link rel="noopener noreferrer" to="/">Privacy</Link>
							</li>
							<li>
								<Link rel="noopener noreferrer" to="/">Terms of Service</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<h3 className="uppercase text-gray-50">Developers</h3>
						<ul className="space-y-1">
							<li>
								<Link rel="noopener noreferrer" to="/">Public API</Link>
							</li>
							<li>
								<Link rel="noopener noreferrer" to="/">Documentation</Link>
							</li>
							<li>
								<Link rel="noopener noreferrer" to="/">Guides</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-3">
						<div className="uppercase text-gray-50">Follow me</div>
						<div className="flex justify-start space-x-3">
							<a href="https://web.facebook.com/sayemahmed.sum" target='_blank' rel='noreferrer'> <AiFillFacebook className='text-3xl text-gray-200 mr-3'></AiFillFacebook></a>

							<a href="https://www.linkedin.com/in/md-sayem-miah/" target='_blank' rel='noreferrer'> <AiFillLinkedin className='text-3xl text-gray-200 mr-3'></AiFillLinkedin></a>

							<a href="https://github.com/Sayem92" target='_blank' rel='noreferrer'> <AiFillGithub className='text-3xl text-gray-200'></AiFillGithub></a>
						</div>
					</div>
				</div>
			</div>
			<div className="py-6 text-sm text-center text-gray-400">© 2020 Company Co. All rights reserved.</div>
		</footer>
	);
};

export default Footer;