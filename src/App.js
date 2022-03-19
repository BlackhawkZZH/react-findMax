import React from 'react';
import './style.css';

class ShowNum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minNum: '',
      maxNum: '',
      numList: [10, 7, 9, -10, 234, 16],
    };
  }

  getNum = () =>
    this.setState({
      minNum: Math.max(...this.state.numList),
      maxNum: Math.min(...this.state.numList),
    });

  clearNum = () =>
    this.setState({
      minNum: '',
      maxNum: '',
    });

  render() {
    return (
      <div>
        <ul>
          {this.state.numList.map((elem) => {
            return <li>{elem}</li>;
          })}
        </ul>
        <div>{`the min num is: ${this.state.minNum}`}</div>
        <div>{`the max num is: ${this.state.maxNum}`}</div>
        <button
          onClick={() => {
            this.getNum();
          }}
        >
          get
        </button>
        <button
          class = "clear"
          onClick={() => {
            this.clearNum();
          }}
        >
          clear
        </button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <ShowNum />
    </div>
  );
}
