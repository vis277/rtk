import React from "React";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  render() {
    const handleClickButton = () => {
      this.setState({ value: this.state.value + 1 });
    };
    return <button onClick={handleClickButton}>{this.state.value}</button>;
  }
}

export default Counter;
