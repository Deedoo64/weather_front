// Insert your code here

const requestAPI = "https://weather-back.vercel.app";

function doRegister() {
  const name = document.querySelector("#registerName").value;
  const email = document.querySelector("#registerEmail").value;
  const password = document.querySelector("#registerPassword").value;

  const body = { name: name, email: email, password: password };

  console.log("BODY", body);

  fetch(requestAPI + "/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((out) => {
      console.log(out);
      if (out.result) {
        console.log("USER CREATED ");
        window.location.assign("index.html");
      }
    });
}

function doConnection() {
  const email = document.querySelector("#connectionEmail").value;
  const password = document.querySelector("#connectionPassword").value;

  const body = { email: email, password: password };

  console.log("BODY", body);

  fetch(requestAPI + "/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((out) => {
      console.log(out);
      if (out.result) {
        console.log("USER CONNECTED !!! ");
        window.location.assign("index.html");
      }
    });
}

document.querySelector("#register").onclick = doRegister;
document.querySelector("#connection").onclick = doConnection;
