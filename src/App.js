import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextHandler" home="Home" about="About" search="Search"/>
      <Textform  Boxheading="Enter Text to analyze: "/>
    </>
  );
}

export default App;
