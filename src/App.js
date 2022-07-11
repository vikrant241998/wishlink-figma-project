import "./App.css";
import Navbar from "./Components/Navbar";
import Tagged from "./Components/Tagged";
// import CompleteMyLook from "./Components/CompleteMyLook";
import Video from "./Components/Video";
// import Favroite from "./Components/Favroite";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Video />
        <Tagged productname={"Tagged Products(2)"} productCount={2}/>
        {/* <CompleteMyLook productname={"Complete my look"} productCount={3}/> */}
        {/* <Favroite /> */}
      </div>
    </div>
  );
}
export default App;