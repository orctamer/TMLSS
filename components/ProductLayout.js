import React, {Component} from 'react';
import { motion } from "framer-motion";

class ProductLayout extends Component {
  constructor(props) {
  super(props);
  this.showModal = () => {
		this.setState({show: true})
		document.body.style.position = 'fixed';
  }
  this.hideModal = () => {
		this.setState({show: false})
		document.body.style.position = 'static'
  }
  this.imgRef = React.createRef();
  this.state = { show: false };
  this.images = ["BLANK", "BLANK", "BLANK", "BLANK"];
	this.imgModal;
	}

  render() {
		this.showHideStyleName = this.state.show ? {left: '0px'} : {left: '-100vw'};
		this.showModalStyleName = this.state.show ? "is-active" : "";
    return (
			<>
				<div className={`modal ${this.showModalStyleName}`}>
					<div className="modal-background"></div>
					<div style={{ width: "calc(100vw - 40px)" }} className="modal-card">
						<header
							className="modal-card-head"
							style={{
								borderBottom: "1px solid #000000",
								backgroundColor: "#101010",
							}}
						>
							<p className="modal-card-title" style={{ color: "white" }}>
								\\ {this.props.name} --:--
							</p>
							<button
								onClick={this.hideModal}
								className="delete"
								aria-label="close"
							></button>
						</header>
						<section
							className="modal-card-body"
							style={{ backgroundColor: "#101010" }}
						>
							<div className="columns">
								<div className="column">
									<img className="image" src={this.modalImage} />
								</div>
								<div className="column">
									<section className="section">
										<h1 style={{ fontSize: "2em", textAlign: "center" }}>
											\\ {this.props.name} --:--{" "}
											<p style={{ textAlign: "center" }} className="price">
												${this.props.price} + tax
											</p>
										</h1>
										<h2
											style={{ textAlign: "left", padding: "1em" }}
											className="price"
										>
											Sari modern influence sportswear trend commercial
											valuable. Artistic extraordinary xs make up breathable
											conservative imprint color effect. Embroidery pattern
											hand-made showcase. Value stock artistry conformity pastel
											pumps creative vintage cut cheap. Catwalk emphasis hippie
											hair trademark consumer influence tailored. Imprint cheap
											wardrobe. Impeccable illustration emphasis. Buttons
											beautiful zipper inspiration comfortable. Luxurious
											instagram revealing. Sari ensemble emphasis expirement
											impeccable modification trademark waistline minimalist.
										</h2>
									</section>
								</div>
							</div>
						</section>
						<footer
							className="modal-card-foot"
							style={{
								backgroundColor: "#101010",
								borderTop: "1px solid #000000",
							}}
						>
							<button
								className="button is-black snipcart-add-item"
								data-item-id={this.props.id}
								data-item-name={`\\\\ ${this.props.name} --:--`}
								data-item-price={this.props.price}
								data-item-image={this.modalImage}
								data-item-description={this.props.description}
								onClick={this.hideModal}
								data-item-url={this.props.url}
							>
								<i className="fas fa-shopping-cart" style={{marginRight: '5px'}}></i> Add To Cart
							</button>
							<button onClick={this.hideModal} className="button">Cancel</button>
						</footer>
					</div>
				</div>
				<section className="section">
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<h1 className="ptitle">
								\\ {this.props.name} --:--{" "}
								<span className="price">
									<br />${this.props.price} + tax
								</span>
							</h1>
						</div>
					</motion.div>

					<div className="columns is-centered has-text-centered">
						{this.images.map((x, index) => (
							<div key={index} className="column">
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<img
										className="image"
										style={{ cursor: "pointer" }}
										ref={this.imgRef}
										src={`../${x}.png`}
										onClick={() => {
											this.modalImage = `../${x}.png`;
											this.showModal();
										}}
									/>
								</motion.div>
							</div>
						))}
					</div>
				</section>

				<style jsx>{`
					.display-grid {
						display: grid;
					}
					.display {
						background-color: #f1eee9;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.purchase {
						border: 1px solid #f1eee9;
						border-radius: 5px;
						padding: 1em 1.5em;
						cursor: pointer;
						transition: all 250ms;
						font-weight: bold;
					}
					.purchase:hover {
						background: #f1eee9;
						color: #101010;
					}
					#modal {
						height: 100vh;
						width: 100vw;
						position: fixed;
						top: 0;
						z-index: 3;
						background: #101010;
						grid-template-columns: 50% 50%;
						transition: all 250ms ease-out;
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
			</>
		);
  }
}

export default ProductLayout