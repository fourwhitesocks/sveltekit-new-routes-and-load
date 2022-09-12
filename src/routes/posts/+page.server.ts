import { postquery } from '$lib/data/db';
//postquery is the function from db.js

export async function load() {
  //const response = await fetch('https://api-us-east-1.graphcms.com/v2/cl3dd3gfx27qu01xnfag6c432/master');

  //const users = await response.json();
  //console.log(users)
  const posts = await postquery(`

    posts {
        title
        excerpt
        
      image {
        url
      }
    }  
`)
  return {
    posts
  }
}