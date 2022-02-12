import react from "react";
import "./App.css"
import "./index.css"
import { Article, Brand, Feture,Navbar } from "./components";
import { Blog, Header } from "./containers";


function App() {
  return (
    <div className="App">
      <div className="gradient_bg"> 
           
        <Navbar />  
        <Header />
      </div>
    </div>
  );
}

export default App;
