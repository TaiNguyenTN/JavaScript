console.log("Lab 05");

const fetchData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();
  console.log("check data: ", data);

  //insert data to html
  const tbody = document.querySelector("#users tbody");
  if (data && data.length) {
    data.forEach((user, index) => {
      tbody.innerHTML += `
    <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
    </tr>`;
    });
  }
};

fetchData();
