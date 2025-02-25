import "./style.css";
import { getPosts } from "../src/utils/api";
import { getLikes, toggleLike } from "./utils/storage";

export async function renderHome() {
  const app = document.getElementById("app");
  const posts = await getPosts();
  const likes = getLikes();

  app.addEventListener("click", (e) => {
    if (e.target.classList.contains("like-btn")) {
      const postId = parseInt(e.target.dataset.id);
      const newLikes = toggleLike(postId);
      e.target.classList.toggle("like");
      e.target.innerHTML = newLikes[postId] ? "❤️" : "🤍";
    }
  });

  const main = document.createElement("main");
  main.classList.add("container")

  posts.forEach((post) => {
    const divPost = document.createElement("div");
    divPost.classList.add("post");

    const postTitle = document.createElement("h3");
    postTitle.innerText = post.title;

    const postBody = document.createElement("p");
    postBody.innerText = post.body;

    const likeBtn = document.createElement("button");
    likeBtn.classList.add("like-btn", "btn", "btn-dark");
    likeBtn.setAttribute("data-id",`${post.id}`);
    likeBtn.innerText = likes[post.id] ? "❤️" : "🤍";

    divPost.append(postTitle, postBody, likeBtn)
    main.appendChild(divPost);
    
    
  });

  app.appendChild(main)
}
/*
  app.innerHTML = `
  <main class="container">
    ${posts
      .map((post) => `
        <div class="post">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <button class="like-btn btn btn-dark" data-id="${post.id}">
            ${likes[post.id] ? "♥️" : "🤍"}
          </button>
        </div>
      `)
      .join("")} 
  </main>
`;
*/

renderHome();
