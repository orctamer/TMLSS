import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = (props) => (
	<div className="main">
		<Head>
			<title>T:ML:SS {`${props.title ? " - " + props.title : ""}`}</title>
			<link rel="icon" href="./favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
				href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css"
			/>
			<link rel="stylesheet" href="../style.css" />
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
			.main {
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

			`}
		</style>
	</div>
);

export default Layout;
