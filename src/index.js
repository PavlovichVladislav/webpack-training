import Post from "./Post";
import "./styles/style.css";
import json from "./assets/json.json";
import logo from './assets/webpack-logo.png';
import xml from './assets/data.xml';
import csv from './assets/username.csv';

const post = new Post("Post title", logo);

console.log("Post to string:", post.toString());
console.log("JSON file content:", json);
console.log('XML', xml);
console.log('CSV', csv);


