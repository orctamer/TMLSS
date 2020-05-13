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

white.getInitialProps = async ctx => {
	const res = await Axios.get('http://localhost:3333/api')
	return {white: res.data.white}
}

export default white;
