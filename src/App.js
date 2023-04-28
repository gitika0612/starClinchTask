
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/quote' element={<Form />} />
      </Routes>
     </Router>
  );
}

export default App;
