let data = [];
let form = document.getElementById('form');
let search = form.querySelector('[name="search"]');
let resultField = document.getElementById('result-field');

search.addEventListener('keydown', function(search) {
  deleteMessages (search.target);
});

form.addEventListener('submit', getRepositories);

async function getRepositories(event) {
  event.preventDefault();
  let searchValue = search.value.trim();
  let response = await fetch(`
    https://api.github.com/search/repositories?q=${searchValue}in:name&per_page=10
  `);
  let result = await response.json();

  if (!searchValue) {
    showEnterRequest();
  } else if (searchValue.length <= 3) {
    showSymbolLimit();
  } else if (result.total_count === 0) {
    showNothingFound();
  } else if (searchValue.length > 3 && response.ok) {
    data = result.items;
    showData();
  }
}

function showData() {
  let out = '';
  data.forEach(function (item) {
    out += `
    <img class="search-image" src=${item.owner.avatar_url}></img>
      <div class="result">
          <a href=${item.svn_url} onclick=${item.svn_url} target="_blank">${item.name}</a>
          <p class="alert-search">User name: ${item.owner.login}</p>
          <p class="alert-stars">${item.watchers_count}</p>
      </div>
      `;
  });
  resultField.innerHTML = out;
}

function showEnterRequest() {
  let out = `
  <p class="enter-request">Enter your request</p>
  `;
  resultField.innerHTML = out;
}

function showSymbolLimit() {
  let out = `
  <p class="enter-request">Enter more than 3 symbols</p>
  `;
  resultField.innerHTML = out;
}

function showNothingFound() {
  let out = "Nothing found &#128532;";
  resultField.innerHTML = out;
}

function deleteMessages () {
  resultField.innerHTML = '';
}




