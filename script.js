const firebaseConfig = {
  apiKey: "AIzaSyCeuct1-3CGFGVpBAdaLx84HGjjUIFtHOg",
  databaseURL: "https://ayurpulse-mj1230-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

db.ref("users/murali").on("value", (snapshot) => {
  const data = snapshot.val();

  document.getElementById("bpm").innerText = data.bpm;
  document.getElementById("spo2").innerText = data.spo2;
});