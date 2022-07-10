import "./App.css";
import Navbar from "./Components/Navbar";
import Tagged from "./Components/Tagged";
import CompleteMyLook from "./Components/CompleteMyLook";
import Video from "./Components/Video";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Video />
        <Tagged productname={"Tagged Products(2)"} productCount={2}/>
         {/* <Tagged productname={"Complete my look"} productCount={3}/>  */}
        <CompleteMyLook productname={"Complete my look"} productCount={3}/>
        {/* <CompleteMyLook /> */}
      </div>
    </div>
  );
}
export default App;