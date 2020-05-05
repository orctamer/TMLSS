import Link from 'next/link'
import React, {Component} from 'react';

class Navbar extends Component {
	constructor() {
		super();
	}
	render() {
		return (	<nav id="navbar">
		<div id="navContainer">
			<Link href="/">
				<div id="logo">T:ML:SS</div>
			</Link>
		</div>
		<div id="links">
			<Link href="/">
				<a className="box item">Home</a>
			</Link>
			<Link href="/products">
				<a className="box item">Products</a>
			</Link>
			<Link href="/about">
				<a className="box item">About</a>
			</Link>
			<Link href="/">
				<a className="box item">Contact</a>
			</Link>
			<a style={{display:'flex'}} className="box item snipcart-checkout snipcart-summary" href="#">
				<svg
					style={{marginRight: "1em"}}
					width="31"
					height="27"
					viewBox="0 0 31 27"
					fill="none"
					className="cart"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.10512 0.368718C0.560256 0.368718 0.118164 0.812066 0.118164 1.35848C0.118164 1.9049 0.560256 2.34824 1.10512 2.34824H4.90887L8.30138 18.4009C8.43503 19.0053 8.83085 19.5079 9.32946 19.5041H25.7788C26.3005 19.5118 26.7799 19.0375 26.7799 18.5143C26.7799 17.9911 26.3006 17.5168 25.7788 17.5245H10.1315L9.71003 15.545H27.095C27.5371 15.5412 27.9547 15.2048 28.0511 14.7718L30.354 4.87412C30.4825 4.29933 29.9852 3.67172 29.3979 3.66786H7.21171L6.6771 1.15221C6.58329 0.71276 6.15921 0.368652 5.7107 0.368652L1.10512 0.368718ZM7.623 5.64746H12.7634L13.2569 8.61674H8.25005L7.623 5.64746ZM14.7785 5.64746H20.9881L20.4946 8.61674H15.2719L14.7785 5.64746ZM23.0031 5.64746H28.1537L27.4649 8.61674H22.5097L23.0031 5.64746ZM8.67181 10.5963H13.5862L14.0797 13.5656H9.29919L8.67181 10.5963ZM15.6009 10.5963H20.1656L19.6721 13.5656H16.0944L15.6009 10.5963ZM22.1807 10.5963H27.0023L26.3135 13.5656H21.6872L22.1807 10.5963ZM12.6197 20.164C10.8141 20.164 9.32979 21.6525 9.32979 23.4632C9.32979 25.2739 10.8141 26.7624 12.6197 26.7624C14.4252 26.7624 15.9095 25.2739 15.9095 23.4632C15.9095 21.6525 14.4252 20.164 12.6197 20.164ZM22.4892 20.164C20.6837 20.164 19.1994 21.6525 19.1994 23.4632C19.1994 25.2739 20.6837 26.7624 22.4892 26.7624C24.2948 26.7624 25.7791 25.2739 25.7791 23.4632C25.7791 21.6525 24.2948 20.164 22.4892 20.164ZM12.6197 22.1435C13.3586 22.1435 13.9356 22.7222 13.9356 23.4632C13.9356 24.2042 13.3586 24.7829 12.6197 24.7829C11.8807 24.7829 11.3037 24.2042 11.3037 23.4632C11.3037 22.7222 11.8807 22.1435 12.6197 22.1435ZM22.4892 22.1435C23.2282 22.1435 23.8052 22.7222 23.8052 23.4632C23.8052 24.2042 23.2282 24.7829 22.4892 24.7829C21.7503 24.7829 21.1733 24.2042 21.1733 23.4632C21.1733 22.7222 21.7503 22.1435 22.4892 22.1435Z"
						fill="#101010"
					/>
				</svg>
				<span className="snipcart-total-price"></span>
			</a>
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
	</nav>)
	}
}


export default Navbar