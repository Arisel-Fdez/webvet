import '../assets/stylesheets/App.css';
import { Routes, Route} from "react-router-dom";
import Inicio from "./Inicio";
import Citas from "../pages/Citas";
import VerCitas from "../pages/VerCitas";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/citas" element={<Citas />} />
                <Route path="/vercitas" element={<VerCitas />} />
            </Routes>
        </div>
    );
}

export default App;
