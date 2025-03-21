// Add your code here

function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        document.getElementById('responseMessage').innerHTML = `New user created with ID: ${object.id}`;
      })
      .catch(function (error) {
        document.getElementById('responseMessage').innerHTML = `Error: ${error.message}`;
      });
  }
  
  
  document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    submitData(name, email);
  });