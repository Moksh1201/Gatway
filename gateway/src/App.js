import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topnav from './Topnav';
import ContentSwitcher from './ContentSwitcher';
import Articles from './Articletemplate';
import Tutorials from './Tutorialstemplate';
import Foot from './lastnav';
import Email from './Email';
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Topnav />} />
        <Route path="/content" element={<ContentSwitcher />} />
        <Route path="" element={<Articles />} />
        <Route path="" element={<Tutorials />} />
        <Route path="" element={<Email />} />
        <Route path="" element={<Foot />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
