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
				<h1 style={{fontSize: '10vw', fontFamily: 'Arial', fontWeight: '600', lineHeight: 1}}>T:ML:SS</h1>
				<h2 style={{fontWeight: "600", fontSize: "1.5em"}}>Coming Soon</h2>
			</div>
		</motion.div>
		<style jsx>{`
			.container {
				height: 100vh;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				position: relative;
			}
			h1 {
				font-size: 10vw;
				font-family: Arial;
			}
			h2 {
				font-family: Arial, sans-serif;
				text-transform: uppercase;
			}
		`}</style>
	</Layout>
);

export default Home;
