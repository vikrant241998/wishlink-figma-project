import "./App.css";
import Navbar from "./Components/Navbar";
import Tagged from "./Components/Tagged";
import Video from "./Components/Video";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Video />
        <Tagged productname={"Tagged Products(2)"} productCount={2}/>
        {/* <Tagged productname={"Tagged Products(3)"} productCount={3}/> */}
      </div>
    </div>
  );
}
export default App;