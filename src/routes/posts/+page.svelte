<script lang="ts">
  export let data;
  console.log(data.posts);
  //below is destructured to make easier to read is not necessary but makes easier to read
  const { posts } = data;
</script>

<h1>Hello there I can be a blog page</h1>

<!-- <p>Help me{posts.title}</p> -->

<!-- <ul>
  {#each data.posts as post}
    <li>{post.title}</li>
    <br />
  {/each}
</ul> -->

<!-- this works too{#each data.posts.posts as { title, excerpt, slug, image }}
<a href="/posts/{slug}">
  <h2>{title}</h2>
</a>
<h3>{excerpt}</h3>
<img src={image.url} alt="im alt text" />
{image}
{/each} -->

{#each posts.posts as post}
  <a href="/posts/{post.slug}">
    <h2>{post.title}</h2>
  </a>
  <h3>{post.excerpt}</h3>
  <img src={post.image.url} alt="im alt text" />
{/each}
