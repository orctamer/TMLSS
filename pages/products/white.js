import ProductLayout from "../../components/ProductLayout";
import Layout from "../../components/Layout";
const white = () => (
	<Layout title="White">
		<ProductLayout
			name="WHITE"
			description="White Shirt Item"
			url="/products/white"
			price={69.99}
			id="2"
		/>
	</Layout>
);

export default white;
