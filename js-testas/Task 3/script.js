/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

//const ENDPOINT = 'https://api.github.com/users';

document.addEventListener("DOMContentLoaded", function() {
    const ENDPOINT = 'https://api.github.com/users';
    const outputDiv = document.getElementById('output');
    const messageParagraph = document.getElementById('message');
    const btn = document.getElementById('btn');
  
    btn.addEventListener('click', function() {
      fetchUsers();
    });
  
    function fetchUsers() {
      fetch(ENDPOINT)
        .then(response => response.json())
        .then(users => {
          outputDiv.innerHTML = ''; // Išvalo esamą turinį
  
          users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
  
            const login = document.createElement('p');
            login.textContent = `Login: ${user.login}`;
  
            const avatar = document.createElement('img');
            avatar.src = user.avatar_url;
            avatar.alt = 'Avatar';
  
            userCard.appendChild(login);
            userCard.appendChild(avatar);
  
            outputDiv.appendChild(userCard);
          });
  
          // Paslepia pranešimą
          messageParagraph.style.display = 'none';
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }
  });