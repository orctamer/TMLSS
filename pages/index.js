import Layout from '../components/Layout';
import Products from '../components/Products';
import {motion} from 'framer-motion'
const Home = () => (
	<Layout>
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className="container">
				<h1>T:ML:SS</h1>
				<h2>Coming Soon</h2>
			</div>
		</motion.div>
		<style jsx>{`
			.container {
				height: 100vh;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
			}
			h1 {
				font-size: 10vw;
				font-family: Arial;
				-webkit-text-stroke-width: 1px;
				-webkit-text-stroke-color: white;
			}
			h2 {
				font-family: Arial, sans-serif;
				text-transform: uppercase;
			}
		`}</style>
	</Layout>
);

export default Home;
