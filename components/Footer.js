import Link from 'next/link'

const Footer = () => (
	<footer className="footer" style={{ backgroundColor: "#000000" }}>
		<div className="content has-text-centered">
			<h1>T:ML:SS</h1>
			<div className="brands">
				<a href="https://www.instagram.com/tmlss_/?hl=en" target="_blank">
					<i className="fab fa-instagram"></i>
				</a>
				<a href="https://twitter.com/tmlss_?lang=en" target="_blank">
					<i className="fab fa-twitter"></i>
				</a>
				<a href="https://www.instagram.com/tmlss_/?hl=en" target="_blank">
					<i className="fab fa-facebook"></i>
				</a>
			</div>
			<h2>Copyright &copy;{new Date().getFullYear()}</h2>
		</div>
		<style jsx>{`
			a {
				color: #f1eee9;
			}
			.main {
				width: 100%;
				background: black;
				margin: 0;
				padding: 0;
				height: 100%;
				color: #f1eee9;
				text-align: center;
				padding: 2em;
			}
			.brands {
				display: flex;
				text-align: center;
				align-items: center;
				justify-content: center;
				margin: 1em 0;
			}
			.brands i {
				font-size: 2em;
				margin: 0 0.5em;
			}
			h1 {
				margin: 0;
				text-align: center;
				text-transform: uppercase;
				font-size: 16pt;
			}
			h2 {
				margin: 0;
				font-size: 10pt;
			}
		`}</style>
	</footer>
);

export default Footer