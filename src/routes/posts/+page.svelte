<script lang="ts">
  export let data;
  console.log(data.posts);
</script>

<h1>Hello there I can be a blog page</h1>

<!-- <p>Help me{posts.title}</p> -->

<!-- <ul>
  {#each data.posts as post}
    <li>{post.title}</li>
    <br />
  {/each}
</ul> -->

{#each data.posts.posts as { title, excerpt }}
  <h2>{title}</h2>
  <h3>{excerpt}</h3>
{/each}
