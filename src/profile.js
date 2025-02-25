import { getUser, getUserPosts } from "./utils/api";

export async function renderProfile() {
  const app = document.getElementById("app");
  const user = await getUser(1);
  const posts = await getUserPosts(user.id);

  /* app.innerHTML = `
  <main class="container">
    <div class="profile">
      <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
    </div>
    <div class="posts">
     ${
        posts.map(post => `
            <div class="post">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
            `
        ).join('')
     }
    </div>
  </main>
    `;*/
  const main = document.createElement("main");
  main.classList.add("container");

  const profile = document.createElement("div");
  profile.classList.add("profile");

  const name = document.createElement("h2");
  name.textContent = user.name;

  const email = document.createElement("p");
  email.textContent = `Email: ${user.email}`;

  profile.append(name, email);

  const postsContainer = document.createElement("div");
  postsContainer.classList.add("posts");

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;

    const postBody = document.createElement("p");
    postBody.textContent = post.body;

    postDiv.append(postTitle, postBody);
    postsContainer.appendChild(postDiv);
  });

  main.append(profile, postsContainer);
  app.appendChild(main);
}

renderProfile();
