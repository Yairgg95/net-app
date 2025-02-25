const URL = "https://jsonplaceholder.typicode.com";

export default async function getPosts() {
  try {
    const res = await fetch(`${URL}/posts`);
    const data = res.json();
    return data
  } catch (error) {
    console.error(error);
  }
}


export  async function getUser(id) {
    try {
        const res = await fetch(`${URL}/users/${id}`)
        const data = res.json();
        return data
    } catch (error) {
        console.error(error);
    }
    
}

export  async function getUserPosts(userId = 1) {
    try {
        // usando un query para buscar los post del usuario 1
    const res = await fetch(`${URL}/posts?userId=${userId}`)
    const data = res.json();
    return data
    } catch (error) {
        console.error(error);
    }
}