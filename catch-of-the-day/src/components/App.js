import react from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends react.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="FRESH DAILY"></Header>
        </div>
        <Order></Order>
        <Inventory></Inventory>
      </div>
    );
  }
}

export default App;
