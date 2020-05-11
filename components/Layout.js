import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = (props) => (
	<div className="main">
		<Head>
			<title>T:ML:SS {`${props.title ? " - " + props.title : ""}`}</title>
			<link rel="icon" href="./favicon.ico" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<script src="../jquery.min.js"></script>
			<link
				href="../fonts.css"
				rel="stylesheet"
			/>
			<link
				href="../all.css"
				rel="stylesheet"
			/>
			<link
				rel="stylesheet"
				href="../bulma.min.css"
			/>
			<link rel="stylesheet" href="../style.css" />
			<link
				rel="stylesheet"
				href="../snipcart.css"
			/>
			<script src="../snipcart.js"></script>
			{/* <script src="../chat.js"></script> */}
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

	</div>
);

export default Layout;
