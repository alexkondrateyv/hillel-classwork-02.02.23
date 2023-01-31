// function that render users
const renderUsers = (users) => {
  const usersData = document.querySelector("#usersData");
  const usersHTML = users
    .map(
      (user) => `
        <div class="user">
          <div class="user-item">${user.id}</div>
          <div class="user-item">${user.name}</div>
          <div class="user-item">${user.username}</div>
          <div class="user-item">${user.email}</div>
        </div>
      `
    )
    .join("");

  usersData.innerHTML = usersHTML;
};

// fetch users from the jsonplaceholder api and first render
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    renderUsers(data);

    const searchBtn = document.querySelector("#searchBtn");
    const searchInput = document.querySelector("#searchInput");

    searchBtn.addEventListener("click", () => {
      const searchTerm = searchInput.value;
      renderUsers(searchUsers(data, searchTerm));
    });

    const sortBtn = document.querySelector("#sortBtn");
    const sortType = document.querySelector("#sortType"); // 'low' or 'hight'

    sortBtn.addEventListener("click", () => {
      renderUsers(sortUsers(data, sortType.value));
    });
  });

// searching function
const searchUsers = (data, searchTerm) => {
};

// sorting function
const sortUsers = (data, sortType) => {
};
