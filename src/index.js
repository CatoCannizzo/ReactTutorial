import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
	render() {
		return (
			<button
				className="square"
				onClick={() => this.props.onClick({ value: "X" })}>
				{this.props.value}
			</button>
		);
	}
}

class Board extends React.Component {
	constructor(props) {
		//method that is called when object is created
		super(props); //allows us to use parent elements props (which is the React.component class I think?)
		this.state = {
			squares: Array(9).fill(null), //cretes square object(?) that is filled with a array of 9 nulls
		};
	}

	renderSquare(i) {
		return (
			<Square //Since we are in board this calls square and passes two things
				value={this.state.square} //value this is the value of the array for the square render square was called with
				onClick={() => this.handleClick(i)} //A function that square can now call called 'onClick'
			/>
		);
	}

	render() {
		const status = "Next player: X";

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
