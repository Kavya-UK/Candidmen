import "./App.css";
import Routing from "./Routing";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

function App() {
  return (
    <div className="App p-[2px]">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}


export default App;
