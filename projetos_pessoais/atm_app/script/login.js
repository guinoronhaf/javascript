import { hidePassword } from "./main.js";

const iUser = document.querySelector('#iUser');
const iPass = document.querySelector('#iPass');
const eyeImg = [...document.querySelectorAll('.eyeImg')];
const btnLogin = document.querySelector('#loginBtn');

hidePassword(eyeImg);

