import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllHackathonsPage from "./pages/AllHackathons";
import DefaultPage from "./pages/DefaultPage";
import SubmitDefaultPage from "./pages/SubmitDefaultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllHackathonsPage/>} />
        <Route path='/default' element={<DefaultPage/>}/>
        <Route path="/create" element={<SubmitDefaultPage/>}/>
        <Route path="*" element={<h1>404 - Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;