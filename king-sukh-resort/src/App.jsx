import Nav from "./Components/Nav";
import Font from './Font';
import About from './Components/About'; 
import Rooms from './Components/Rooms';
import Services  from "./Components/Services";

const App = () => {
 
  return (
    <>
      <div className="bg-slate-900">
        <Nav />
        </div>
      <Font/>
      <About />
      <Rooms />
      <Services/>

    </>
 
  );
  
};

export default App
