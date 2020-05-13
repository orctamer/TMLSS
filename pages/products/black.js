import ProductLayout from '../../components/ProductLayout'
import Layout from '../../components/Layout';
import Axios from 'axios';
const black = ({black}) => (
	<Layout title={black.name}>
		<ProductLayout
			name={black.name}
			description={black.description}
			url={black.url}
			price={black.price}
			id={black.id}
		/>
	</Layout>
);

black.getInitialProps = async ({req}) => {
	const protocol = req.headers["x-forwarded-proto"];
	const host = req.headers["x-forwarded-host"] || req.headers.host;
	const res = await Axios.get(`${protocol}://${host}/api`);
	return {black:res.data.black};
}

export default black