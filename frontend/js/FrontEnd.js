const getData = (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  //const formData = new FormData(event.target);
  //const formDataOBject = Object.fromEntries(formData.entries());

  // Make a fetch request to the specified URL
  fetch("http://localhost:3000/testGet")
    // When the response is received, convert it to text
    .then((response) => response.text())
    // When the text data is received, log it to the console
    .then((data) => {
      console.log(data);
    })
    // If there is an error during the fetch request, log the error to the console
    .catch((error) => {
      console.error("Error:", error);
    });
};

const postData = (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const formData = new FormData(event.target);
  const formDataOBject = Object.fromEntries(formData.entries());

  // Make a fetch request to the specified URL
  fetch("http://localhost:3000/testPost", {
    method: "POST", // Specify the request method
    headers: {
      "Content-Type": "text/plain", // Set the content type to text
      //"Content-Type": "application/json", // Set the Content-Type to application/json
      //Authorization: "", // Add an authorization header
    },
    body: formDataOBject.message,
    //body: JSON.stringify(data), //convert js object to JSON
  })
    // When the response is received, convert it to text
    .then((response) => response.text())
    // When the text data is received, log it to the console
    .then((data) => {
      console.log(data);
    })
    // If there is an error during the fetch request, log the error to the console
    .catch((error) => {
      console.error("Error:", error);
    });
};

// Get the elements and add an event listener for the "click" events
document.getElementById("getForm").addEventListener("submit", getData);
document.getElementById("postForm").addEventListener("submit", postData);
