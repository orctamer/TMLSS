// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
			<section style={{ minHeight: "80vh" }} className="section container">
				<h1
					className="has-text-centered has-text-weight-bold"
					style={{
						fontSize: "48pt",
						marginBottom: "1em",
					}}
				>
					Contact
				</h1>
				<div className="field">
					<form
						onSubmit={this.submitForm}
						action="https://formspree.io/moqkvlqq"
						method="POST"
					>
						<div className="field is-horizontal">
							<div className="field-label is-normal">
								<label className="label">Name:</label>
							</div>
							<div className="field-body">
								<input className="input" required type="name" name="name" />
							</div>
						</div>
						<div className="field is-horizontal">
							<div className="field-label is-normal">
								<label className="label">Email:</label>
							</div>
							<div className="field-body">
								<input className="input" required type="email" name="email" />
							</div>
						</div>
						<div className="field is-horizontal">
							<div className="field-label is-normal">
								<label className="label">Message:</label>
							</div>
							<div className="field-body">
								<div className="field">
									<div className="control">
										<textarea
											type="text"
											name="message"
											required
											spellCheck="false"
											className="textarea"
										></textarea>
									</div>
								</div>
							</div>
						</div>
						<div className="field is-horizontal">
							<div class="field-label"></div>
							<div className="field-body">
								<div className="field">
									<div className="control">
										{status === "SUCCESS" ? (
											<p className="has-text-weight-bold">
												Thanks! We will contact you as soon as possible!
											</p>
										) : (
											<button className="button is-dark">Submit</button>
										)}
										{status === "ERROR" && (
											<p className="has-text-weight-bold has-text-danger">
												Ooops! There was an error.
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					</form>
					<style jsx>{`
						label {
							color: white;
						}
						input,
						textarea {
							background: #101010;
							color: white;
              border: 1px solid black;
              resize: none;
						}
						input:-webkit-autofill,
						input:-webkit-autofill:hover,
						input:-webkit-autofill:focus,
						textarea:-webkit-autofill,
						textarea:-webkit-autofill:hover,
						textarea:-webkit-autofill:focus,
						select:-webkit-autofill,
						select:-webkit-autofill:hover,
						select:-webkit-autofill:focus textarea:active {
							-webkit-text-fill-color: white;
							border: 1px solid white;
							-webkit-box-shadow: 0 0 0px 1000px #101010 inset;
						}
						textarea:focus,
						input:active,
						input:focus {
							border: 1px solid white;
						}
					`}</style>
				</div>
			</section>
		);
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}