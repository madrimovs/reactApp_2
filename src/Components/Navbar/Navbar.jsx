function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
			<div className="container">
				<a href="/topPage" className="navbar-brand js-scroll-trigger">
					Logo
				</a>

				<button
					className="navbar-toggler navbar-toggler-right collapsed"
					type="button"
					data-toggle="collapse"
					data-target="/navbarResponsive"
				>
					Menu
					<i className="fa fa-bars"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarResponsive ">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="/about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="/download">
								Download
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="/contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
