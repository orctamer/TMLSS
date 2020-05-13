import ProductLayout from "../../components/ProductLayout";
import Layout from "../../components/Layout";
import Axios from "axios";
const white = ({white}) => (
	<Layout title={white.name}>
		<ProductLayout
			name={white.name}
			description={white.description}
			url={white.url}
			price={white.price}
			id={white.id}
		/>
	</Layout>
);

white.getInitialProps = async ({ req }) => {
	const protocol = req.headers["x-forwarded-proto"];
	const host = req.headers["x-forwarded-host"] || req.headers.host;
	const res = await Axios.get(`${protocol}://${host}/api`);
	return { white: res.data.white };
};

export default white;
