import React from "react";
import { Card } from "./card.components";
import styled from "styled-components";
import "./App.css";

const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${({ isActive }) =>
    isActive ? "1px solid black" : "3px dotted green"};
`;

function App() {
  return (
    <div className="App">
      <Card>
        <div>
          <Text isActive={false}>Iam components</Text>
        </div>
      </Card>
    </div>
  );
}

export default App;
