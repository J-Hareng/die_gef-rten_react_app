import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login_page from "./loginpage";
import Main_page from "./mainpage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_page />} />
        <Route path="/main" element={<Main_page />} />
      </Routes>
    </BrowserRouter>
        );
}
export default App; 