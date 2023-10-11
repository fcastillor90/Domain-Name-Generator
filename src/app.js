/* eslint-disable */
/*import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";*/

window.onload = function () {
  //write your code here
  function gerogero() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let dom = ['.com', '.net', '.es', '.cl', '.com.ar', '.ca', '.pe'];

    var randpron = Math.floor(Math.random() * pronoun.length);
    var randadj = Math.floor(Math.random() * adj.length);
    var randnoun = Math.floor(Math.random() * noun.length);
    var randdom = Math.floor(Math.random() * dom.length);

    document.getElementById('domdom').innerHTML = "<h2>" + pronoun[randpron] + adj[randadj] + noun[randnoun] + dom[randdom] + "</h2>";
  }

  console.log(gerogero());

};
