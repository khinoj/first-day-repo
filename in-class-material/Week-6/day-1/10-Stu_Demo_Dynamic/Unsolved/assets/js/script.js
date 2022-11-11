var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for ( var i = 0; i < data.length; i++) {
        let userinfo = document.createElement('li');
        userinfo.textContent = data[i].login;
        userContainer.appendChild(userinfo);

        let userlink = document.createElement('ul');
        userlink.textContent = data[i].url;
        userlink.setAttribute('href', data[i].url);
        userinfo.appendChild(userlink);

      }
    });
}
fetchButton.addEventListener('click', getApi);