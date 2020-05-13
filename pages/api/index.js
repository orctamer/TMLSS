const products = {
	black: {
		name: "BLACK",
		description: "Black Shirt Item",
		url: "/products/black",
		price: 69.99,
		id: 1,
	},
	white: {
		name: "WHITE",
		description: "White Shirt Item",
		url: "/products/white",
		price: 69.99,
		id: 2,
	},
};


export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", 'application/json')
  res.end(JSON.stringify(products))
}