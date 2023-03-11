import { createRoot } from 'react-dom/client';

import Post from "@models/Post";
import "./babel";

import json from "./assets/json.json";
import logo from "./assets/webpack-logo";
import xml from "./assets/data.xml";
import csv from "./assets/username.csv";

import "./styles/style.css";
import "./styles/scss.scss";

const root = createRoot(document.getElementById("app"));
const App = () => {
   return (
      <div className="container">
         <h1>My webpack training.</h1>
         <hr />
         <div className="logo"></div>
         <hr />
         <pre></pre>

         <div className="box">
            <h2>scss test</h2>
         </div>
      </div>
   );
};

root.render(<App />);

const post = new Post("Post title", logo);

console.log("Post to string:", post.toString());
console.log("JSON file content:", json);
console.log("XML", xml);
console.log("CSV", csv);