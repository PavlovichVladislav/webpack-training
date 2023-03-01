import * as $ from 'jquery';
import Post from "@models/Post";
import "./styles/style.css";
import json from "./assets/json.json";
import logo from './assets/webpack-logo';
import xml from './assets/data.xml';
import csv from './assets/username.csv';

const post = new Post("Post title", logo);
$('pre').addClass('code').html(post.toString());

console.log("Post to string:", post.toString());
console.log("JSON file content:", json);
console.log('XML', xml);
console.log('CSV', csv);



