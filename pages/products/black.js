import ProductLayout from '../../components/ProductLayout'
import Layout from '../../components/Layout';
const black = () => (
	<Layout title="Black">
		<ProductLayout
			name="BLACK"
			description="Black Shirt Item"
			url="/products/black"
			price={69.99}
			id="1"
		/>
	</Layout>
);

export default black