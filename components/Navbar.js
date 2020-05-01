import Link from 'next/link'

const Navbar = () => (
	<nav id="navbar">
		<div id="navContainer">
			<Link href="/">
				<div id="logo">T:ML:SS</div>
			</Link>
		</div>
		<div id="links">
			<Link href="/">
				<a className="box item">Home</a>
			</Link>
			<Link href="/">
				<a className="box item">Products</a>
			</Link>
			<Link href="/about">
				<a className="box item">About</a>
			</Link>
			<Link href="/">
				<a className="box item">Contact</a>
			</Link>
		</div>
		<style jsx>{`
			#navbar {
				display: grid;
				grid-auto-flow: column;
				background-color: #f1eee9;
				grid-gap: 20px;

				padding: 20px 30px;
			}

			#navContainer {
			}

			#logo {
				display: flex;
				justify-content: flex-start;
				align-content: flex-start;
				font-size: 2.8em;
				font-family: "Arial", san-serif;
				font-weight: 600;
				position: relative;
				z-index: 3;
				padding-left: 0.45em;
				line-height: 1.4em;
				cursor: pointer;
			}

			#logo::after {
				content: "";
				z-index: -1;
				left: 0;
				top: 0;
				position: absolute;
				width: 200px;
				height: 50px;
				border: 1px solid black;
				margin: 5px;
				background: #f1eee9;
			}

			#logo::before {
				content: "";
				z-index: -1;
				left: 0;
				top: 0;
				position: absolute;
				width: 200px;
				height: 50px;
				border: 1px solid black;
				margin-top: 15px;
				margin-left: 15px;
				background: #f1eee9;
			}

			#links {
				display: grid;
				justify-content: end;
				align-content: center;
				grid-auto-flow: column;
				grid-gap: 20px;
				font-size: 20px;
			}

			.box {
				padding: 1em 1.5em;
				cursor: pointer;
				position: relative;
				transition: 0.5s;
				-webkit-transition: 0.5s;
			}

			.box:hover::after,
			.box:hover::before {
				-webkit-transform: scale(1);
			}

			.box::before,
			.box::after {
				width: 100%;
				height: 100%;
				z-index: 3;
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				box-sizing: border-box;
				-webkit-transform: scale(0);
				transition: 0.5s;
			}

			.item {
				font-weight: 600;
				text-transform: uppercase;
				color: #363636;
			}
			.item::before {
				border-bottom: 3px solid #363636;
				border-left: 0;
				-webkit-transform-origin: 0% 100%;
			}
			.item::after {
				border-top: 0;
				border-right: 0;
				-webkit-transform-origin: 50% 50%;
			}
		`}</style>
	</nav>
);



export default Navbar