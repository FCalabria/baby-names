const firebase = require("firebase")
const {firebaseConfig, firebasePath} = require("./config.js")

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref(firebasePath);

// TODO: get and send data from firebase