
import { error } from '@sveltejs/kit';
import { postquery } from '$lib/data/db';

export async function load({ params }) {

  const post = await postquery(`

  post(where:{ slug: "${params.slug}" }){
    title
    excerpt
    slug
    image {
      url
    }
  }
`)

  if (post) {
    return post;
  }

  throw error(404, "not found");
}







