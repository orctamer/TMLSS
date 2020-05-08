import Layout from '../components/Layout';
import {motion} from 'framer-motion';

const Policy = () => (
	<Layout title="Private Policy">
		<section
			style={{ height: "80vh" }}
			className="section is-centered container"
		>
			<motion.div
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1
					className="has-text-weight-bold has-text-centered"
					style={{ fontSize: "48pt" }}
				>
					T:ML:SS
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<h1 className="has-text-centered is-size-2">Private Policy</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<h1 className="is-size-4">- Policy -</h1>
				<p className="has-text-weight-bold is-size-4">
					YOUR PERSONAL INFORMATION WILL NOT BE SHARED OR SOLD TO THIRD PARTIES.
				</p>
				<p>
					By purchasing from this website, you understand that there are no
					refunds after an order is placed so please ensure your order is
					correct.
				</p>
				<h1 className="is-size-4"> - Shipping Information -</h1>
				<p>
					After successfully placing an order you will receive an email
					confirming that your purchase was processed.
				</p>
				<p>
					Once your order has shipped you will receive a second email with a
					confirmation of shipment that includes a tracking number that can be
					used to track your package all the way to your door.
				</p>
				<p>May take 7-14 Business days of shipping & handling.</p>
				<p>Please allow 5-10 days for delivery.</p>
				<p className="has-text-weight-bold is-size-4">
					MAXIMUM SHIPPING TIME UP TO 4 WEEKS.
				</p>
				<p>
					Email{" "}
					<a className="has-text-weight-bold" href="mailto:timlessSW@gmail.com">
						timelessSW@gmail.com
					</a>{" "}
					for any other questions or enquiries or direct message on{" "}
					<a
						className="has-text-weight-bold"
						href="https://www.instagram.com/tmlss_/"
						target="_blank"
					>
						@TMLSS_
					</a>
				</p>
			</motion.div>
		</section>
	</Layout>
);

export default Policy;