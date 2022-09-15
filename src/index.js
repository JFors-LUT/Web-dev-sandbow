if (document.readyState !== "loading") {
  //console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    //console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const addButton = document.getElementById("myButton");
  const myHeader = document.getElementById("header1");
  myHeader.innerText = "Hello world";

  addButton.addEventListener("click", function () {
    console.log("hello world");
    myHeader.innerText = "My notebook";
  });

  const dataButton = document.getElementById("add-data");

  dataButton.addEventListener("click", function () {
    const arbitratyList = document.getElementById("myList");
    let arbitraryText = document.createElement("li");

    arbitraryText.innerText = document.getElementById("arbitratyBox").value;

    arbitratyList.appendChild(arbitraryText);
  });
}
