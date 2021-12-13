import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor: 클래스의 시작");
    this.state = {
      helloLifeCycle: "helloLifeCycle",
    };
  }

  componentDidMount() {
    console.log("componentDidMount: 첫 렌더링이 완료됨");
    console.log("------------업데이트를 시작할게요 ---------------");
    console.log("setState 진행");
    this.setState({
      helloLifeCycle: "updated",
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: 컴포넌트가 업데이트 됨");
    // 업데이트 된 후의 현재 state
    console.log(this.state, "업데이트 후");
    // 업데이트 되기 전 state
    console.log(prevState, "업데이트 전");
  }

  componentWillUnmount() {
    console.log("componentWillUnMount");
    console.log("이 친구는 창 닫으면 동작해서 보실 순 없어요 ..");
  }

  render() {
    console.log("render: 나는 렌더링을 합니다.");
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
