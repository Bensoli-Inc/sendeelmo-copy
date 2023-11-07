import Header from "./components/header/header";
import Welcome from "./components/Welcome/welcome";
import "./App.css"

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Welcome/>
      </div>
    </div>  
  );
}

export default App;


