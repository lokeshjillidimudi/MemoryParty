import Banner from "./MainApp/banner";
import Menu from "./MainApp/menu";
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="app-banner">
      <Banner/>
      </div>
    <div className="app-menu">
    <Menu />
    </div>

    </div>
  );
}

export default App;
