import './App.css';
import NavBar from "./view/common/navBar/NavBar";
import {Footer} from "./view/common/footer/Footer";
import Home from "./view/pages/Home";


function App() {
  return (
      <div>
          <NavBar/>
            <Home/>
          <Footer />
      </div>
  );
}

export default App;
