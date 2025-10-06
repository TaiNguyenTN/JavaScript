console.log("Video 72");

const fetchBlogs = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const data = await res.json();
  console.log("blogs: ", data);

  //insert data to html

  const tbody = document.querySelector("#blogs tbody");

  if (data && data.length) {
    data.forEach((blog, index) => {
      tbody.innerHTML += `
        <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.author}</td>
            <td>${blog.content}</td>
            <td><button class="delete-btn" data-id="${blog.id}">Xoa</button></td>
        </tr>
        `;
    });
  }
};

const addNewRowToEnd = (blog) => {
  const tableBody = document.querySelector("#blogs tbody");

  //Tao phan tu dong moi
  const newRow = document.createElement("tr");

  //Gan HTML cho dong
  newRow.innerHTML = `
  <td>${blog.id}</td>
  <td>${blog.title}</td>
  <td>${blog.author}</td>
  <td>${blog.content}</td>
  <td><button class="delete-btn" data-id="${blog.id}">Xoa</button></td>`;

  //Them dong vao cuoi bang
  tableBody.appendChild(newRow);

  //gan su kien onClick cho row vua tao
  const btn = document.querySelector(`[data-id='${blog.id}']`);
  btn.addEventListener("click", async () => {
    const id = btn.getAttribute("data-id");

    //call api to delete blog
    const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    //delete html row
    const row = btn.closest("tr");
    row.remove();
  });
};

const handleAddNewBlog = () => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const content = document.getElementById("content");

  const saveBlogBtn = document.getElementById("saveBlog");
  saveBlogBtn.addEventListener("click", async () => {
    console.log(title.value, author.value, content.value);

    //call api to create a new blog
    const rawResponse = await fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        author: author.value,
        content: content.value,
      }),
    });
    const data = await rawResponse.json();
    addNewRowToEnd(data);
    console.log("Phan hoi api create: ", data);
  });
};

const handleDeletes = () => {
  const btns = document.querySelectorAll(".delete-btn");
  if (btns) {
    btns.forEach((btn, index) => {
      btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id");

        //call api to delete blog
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const data = await rawResponse.json();

        //delete html row
        const row = btn.closest("tr");
        row.remove();
      });
    });
  }
};

fetchBlogs().then(() => {
  handleDeletes();
});
handleAddNewBlog();
