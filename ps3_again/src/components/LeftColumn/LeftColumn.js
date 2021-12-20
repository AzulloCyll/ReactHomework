import React from "react";

// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class LeftColumn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			name: "",
			zodiac: "",
			messageText: "",
		};
	}

	componentDidMount() {
		console.log("mounted");
	}

	componentWillUnmount() {
		console.log("unmonted");
	}

	componentDidUpdate() {
		console.log("updated");
	}

	handleIncreaseCounter = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};

	handleDecreaseCounter = (e) => {
		e.preventDefault();
		this.setState({
			counter: this.state.counter - 1,
		});
	};

	handleChange = (e) => {
		if (e.target.name === "name") {
			this.setState({ name: e.target.value });
		}
		if (e.target.name === "zodiac") {
			this.setState({ zodiac: e.target.value });
		}
	};

	handleSubmit = (e) => {
		const { name, zodiac } = this.state;
		e.preventDefault();
		this.setState({
			messageText: `Cześć ${name}, twój znak zodiaku to ${zodiac}`,
		});
	};

	render() {
		return (
			<div className={commonColumnsStyles.App}>
				<header className={commonColumnsStyles.AppHeader}>
					<button
						onClick={this.handleIncreaseCounter}
						onContextMenu={this.handleDecreaseCounter}
					>
						Left click + 1 / Right click -1
					</button>
					<p>Counter: {this.state.counter}</p>

					<p>{this.state.messageText}</p>

					<form onSubmit={this.handleSubmit}>
						<label htmlFor="name">Imię:</label>
						<input
							type="text"
							name="name"
							id="name"
							value={this.state.name}
							onChange={this.handleChange}
						/>
						<br />
						<label htmlFor="zodiac">Znak zodiaku</label>
						<input
							type="text"
							name="zodiac"
							id="zodiac"
							value={this.state.zodiac}
							onChange={this.handleChange}
						/>
						<br />
						<input type="submit" value="wyślij" />
					</form>
				</header>
			</div>
		);
	}
}

export default LeftColumn;
