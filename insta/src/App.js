import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Homepage from './Components/Homepage';
import ChatPage from './Components/ChatPage';
function App() {
  return (
    <div className="App">
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path="/chat" element={<ChatPage/>}/>
   </Routes>
    </div>
  );
}

export default App;
