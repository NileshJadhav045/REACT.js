import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <>
      {/* <LudoBoard></LudoBoard> */}
      {/* <TodoList></TodoList> */}
      <Lottery n={3} winningSum={15}></Lottery>
      {/* <TicketNum num={3}></TicketNum>
      <TicketNum num={2}></TicketNum>
      <TicketNum num={5}></TicketNum> */}
      {/* <Ticket ticket={[0, 2, 1]}></Ticket> */}
    </>
  );
}

export default App;
