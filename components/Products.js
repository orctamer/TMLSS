import { motion } from "framer-motion";

const Products = (props) => (
	<section className="container section">
		<motion.div
			initial={{ opacity: 0, y: -150 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.25 }}
		>
			<h1>Products</h1>
		</motion.div>
		<div className="columns">
			<div className="column is-centered has-text-centered">
				<motion.div
					initial={{ opacity: 0, x: -150 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 style={{ fontSize: "16pt", marginBottom: "1em" }}>
						\\ BLACK --:--
					</h2>
				</motion.div>
				<a href="/products/black">
					<motion.img
						className="image"
						initial={{ opacity: 0, x: -125 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						src="BLANK.png"
						style={{
							marginTop: "1em",
							cursor: "pointer",

							margin: "0 auto",
						}}
					/>
				</a>
			</div>
			<div className="column is-centered has-text-centered">
				<motion.div
					initial={{ opacity: 0, x: 150 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 style={{ fontSize: "16pt", marginBottom: "1em" }}>
						\\ WHITE --:--
					</h2>
				</motion.div>
				<a href="/products/white">
					<motion.img
						className="image"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ opacity: 0, x: 125 }}
						animate={{ opacity: 1, x: 0 }}
						src="./BLANK.png"
						style={{
							marginTop: "1em",
							cursor: "pointer",
							margin: "0 auto",
						}}
					/>
				</a>
			</div>
		</div>

		<style jsx>{`
			h1 {
				padding: 2em;
				text-align: center;
				text-transform: uppercase;
				font-size: 24pt;
				color: #f1eee9;
			}
			#products {
				width: 100%;
				height: 80vh;
				display: grid;
				grid-template-columns: auto auto;
				color: #f1eee9;
				align-items: flex-start;
			}
			.product {
				height: 100%;
				text-align: center;
				font-weight: 900;
				text-transform: uppercase;
				font-size: 16pt;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.image {
				margin-top: 1em;
				cursor: pointer;
				height: 350px;
			}
		`}</style>
	</section>
);

export default Products