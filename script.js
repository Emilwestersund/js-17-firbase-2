
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getDatabase, ref, get, set, update, remove, child } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD9J5TFpiBQVG72b3UEUDy4IDlFwuHgAGY",
    authDomain: "js-17-firebase-2.firebaseapp.com",
    projectId: "js-17-firebase-2",
    storageBucket: "js-17-firebase-2.appspot.com",
    messagingSenderId: "976316514565",
    appId: "1:976316514565:web:303d9d6c993688aed2f76c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize Database
  const db = getDatabase(app);

  // Get references to the DOM elements
  var enterID = document.querySelector("#enterID");
  var enterName = document.querySelector("#enterName");
  var enterAge = document.querySelector("#enterAge");
  var findID = document.querySelector("#findID");
  var findName = document.querySelector("#findName");
  var findAge = document.querySelector("#findAge");

  var insertBtn = document.querySelector("#insert");
  var updateBtn = document.querySelector("#update");
  var removeBtn = document.querySelector("#remove");
  var findBtn = document.querySelector("#find");

  // Insert Data
  function InsertData() {
    set(ref(db, "People/" + enterID.value), {
      Name: enterName.value,
      ID: enterID.value,
      Age: enterAge.value
    })
    .then(() => {
      alert("Data added successfully");
    })
    .catch((error) => {
      alert(error);
    });
  }

  // Find Data
  function FindData() {
    const dbref = ref(db);

    get(child(dbref, "People/" + findID.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        findName.innerHTML = "Name: " + snapshot.val().Name;
        findAge.innerHTML = "Age: " + snapshot.val().Age;
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert(error);
    });
  }

  // Update Data
  function UpdateData() {
    update(ref(db, "People/" + enterID.value), {
      Name: enterName.value,
      Age: enterAge.value
    })
    .then(() => {
      alert("Data updated successfully");
    })
    .catch((error) => {
      alert(error);
    });
  }

  // Remove Data
  function RemoveData() {
    remove(ref(db, "People/" + enterID.value))
    .then(() => {
      alert("Data deleted successfully");
    })
    .catch((error) => {
      alert(error);
    });
  }

  // Add event listeners
  insertBtn.addEventListener("click", InsertData);
  updateBtn.addEventListener("click", UpdateData);
  removeBtn.addEventListener("click", RemoveData);
  findBtn.addEventListener("click", FindData);

