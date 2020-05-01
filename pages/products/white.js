import Layout from '../../components/Layout';
import React, { Component, useRef } from 'react'
import { motion } from "framer-motion";

class White extends Component {	
  constructor() {
    super();
      this.showModal = () => {
				this.setState({ show: true });				
			};
			this.hideModal = () => {
				this.setState({ show: false });
			};
		this.imgRef = React.createRef();
    this.state = { show: false };
		this.images = ["BLANK", "BLANK", "BLANK", "BLANK"];
		this.imgModal;
  }

  render() {
    this.showHideClassName = this.state.show ? "display-grid" : "display-none";
    return (
			<Layout>
				<div className={this.showHideClassName} id="modal">
					<div className="closeModal" onClick={this.hideModal}>
						X
					</div>
					<div className="display">
						<div style={{ position: "relative" }}>
							<h1
								className="price"
								style={{
									color: "black",
									fontSize: "24pt",
									fontWeight: "bold",
									position: "absolute",
									top: "50%",
									left: 0,
									right: 0,
									bottom: 0,
								}}
							>
								PLACEHOLDER
							</h1>
							<img
								style={{ height: "750px", border: "2px solid black" }}
								src={this.modalImage}
							/>
						</div>
					</div>
					<div
						style={{
							backgroundColor: "#101010",
							flexDirection: "column",
							padding: "5em",
						}}
						className="display"
					>
						<h1>
							\\ White --:--{" "}
							<p style={{ textAlign: "center" }} className="price">
								$69.99 + tax
							</p>
						</h1>
						<h2 style={{ textAlign: "left", padding: "1em" }} className="price">
							Sari modern influence sportswear trend commercial valuable.
							Artistic extraordinary xs make up breathable conservative imprint
							color effect. Embroidery pattern hand-made showcase. Value stock
							artistry conformity pastel pumps creative vintage cut cheap.
							Catwalk emphasis hippie hair trademark consumer influence
							tailored. Imprint cheap wardrobe. Impeccable illustration
							emphasis. Buttons beautiful zipper inspiration comfortable.
							Luxurious instagram revealing. Sari ensemble emphasis expirement
							impeccable modification trademark waistline minimalist.
						</h2>
					</div>
				</div>
				<div id="products">
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="title">
							<h1 className="ptitle">
								\\ White --:--{" "}
								<span className="price">
									<br />
									$69.99 + tax
								</span>
							</h1>
						</div>
					</motion.div>
					<div className="product">
						{this.images.map((x) => (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								whileHover={{ scale: 1.05 }}
								onTap={{ scale: 0.95 }}
							>
								<img
									className="image"
									style={{ maxWidth: "370px", cursor: "pointer" }}
									key={x.toString()}
									ref={this.imgRef}
									src={`../${x}.png`}
									onClick={() => {
										this.modalImage = `../${x}.png`;
										this.showModal();
									}}
								/>
							</motion.div>
						))}
					</div>
				</div>
				<style jsx>{`
					.display-grid {
						display: grid;
					}
					.display-none {
						display: none;
					}
					.display {
						background-color: #f1eee9;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					#modal {
						height: 100vh;
						width: 100vw;
						position: fixed;
						top: 0;
						left: 0;
						z-index: 3;
						background: #101010;
						grid-template-columns: 50% 50%;
					}
					#products {
						width: 100%;
						height: 100vh;
						display: grid;
						grid-template-columns: auto;
						color: #f1eee9;
						align-items: flex-start;
					}
					.product {
						display: grid;
						grid-template-columns: auto auto auto auto;
						grid-gap: auto;
						justify-items: center;
					}
					.image {
						max-width: 370px;
						cursor: pointer;
					}
					h2 {
						margin: 0;
						pading: 0;
						text-align: center;
					}
					.title {
						height: 0;
					}
					.ptitle {
						margin: 0;
						padding: 2em 0;
						text-align: center;
						text-transform: uppercase;
						font-size: 24pt;
						color: #f1eee9;
					}
					.price {
						font-size: 12pt;
						text-align: center;
						font-weight: normal;
					}
					.closeModal {
						position: absolute;
						top: 0;
						right: 0;
						margin-top: 1em;
						margin-right: 2.5em;
						font-size: 24pt;
						font-weight: bold;
						cursor: pointer;
					}
				`}</style>
			</Layout>
		);
  }
}


export default White