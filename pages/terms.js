import Layout from '../components/Layout';
import {motion} from 'framer-motion';

const Terms = () => (
	<Layout title="Terms &amp; Conditions">
		<section
			style={{ height: "80vh" }}
			className="section is-centered container"
		>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="has-text-weight-bold has-text-centered" style={{fontSize: "48pt"}}>
					T:ML:SS
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<h1
					className="has-text-centered is-size-2"
				>
					Terms &amp; Conditions
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<h1 className="is-size-4">- Payment Methods -</h1>
				<p>We accept VISA, MASTERCARD, AMERICAN EXPRESS &amp; PAYPAL</p>
				<h1 className="is-size-4"> - Returns &amp; Exchanges -</h1>
				<p>
					Please make sure that shipping & billing addresses are correct as all
					sales are final once checked out there will be NO RETURNS OR
					EXCHANGES.
				</p>
				<p>We are not responsible for any orders placed by mistake.</p>
				<p>We do not deliver on weekends or holidays.</p>
				<p>No refunds unless item is defective.</p>
				<p className="has-text-weight-bold is-size-4">ALL SALES ARE FINAL.</p>
			</motion.div>
		</section>
	</Layout>
);

export default Terms;