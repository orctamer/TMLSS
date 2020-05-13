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

black.getInitialProps = async ctx => {
	const res = await Axios.get('http://localhost:3333/api')
	return {black:res.data.black};
}

export default black