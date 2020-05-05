import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = (props) => (
	<div className="container">
		<Head>
			<title>T:ML:SS</title>
			<link rel="icon" href="./favicon.ico" />
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
			<link
				href="https://fonts.googleapis.com/css?family=Nunito:400,800|Rock+Salt&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
				rel="stylesheet"
			/>
			<link
				rel="stylesheet"
				href="https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.css"
			/>
			<script src="https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.js"></script>
		</Head>
		<div
			id="snipcart"
			data-api-key="MmI0ZmZhNWUtYTI1NC00ZmYxLWJlNDEtNTY4MmQ1NDQwYTgxNjM3MjQxOTA0NTIyMjEzNzk0"
			hidden
		></div>
		<Navbar />
		<div className="main">{props.children}</div>
		<Footer />
		<style jsx>{`
			.container {
				background-color: #f1eee9;
				margin: 0;
				padding: 0;
			}
			.main {
				background-color: #101010;
				color: #f1eee9;
			}
		`}</style>
		<style global jsx>
			{`
				* {
					box-sizing: border-box;
				}
				::-webkit-scrollbar {
					width: 5px;
				}
				::-webkit-scrollbar-track {
					background: #000;
				}
				::-webkit-scrollbar-thumb {
					background: #888;
				}
				::-webkit-scrollbar-thumb:hover {
					background: #f1eee9;
				}
				h1,
				h2 {
					margin: 0;
					padding: 0;
				}
				html,
				body {
					font-family: "Nunito", sans-serif;
					margin: 0;
					padding: 0;
				}
				body {
					background: #101010;
					height: 100vh;
				}
				a {
					text-decoration: none;
				}
				a:hover {
					text-decoration: none;
					cursor: pointer;
				}
				.snipcart-cart-header__title,
				.snipcart__font--std {
					text-transform: uppercase;
				}
			`}
		</style>
	</div>
);

export default Layout;
