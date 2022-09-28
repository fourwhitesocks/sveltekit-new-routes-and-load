<script lang="ts">
  export let data;
  console.log(data);
</script>

<h1 class="text-3xl font-bold underline">New SvelteKit basic sandbox :)</h1>

<h2>
  Below just pulling in names from a pulic json api: https://jsonplaceholder.typicode.com/users
</h2>
<br />
<p>I'm {data.age} years old</p>

<ul>
  {#each data.users as user}
    <li>{user.name}</li>
    <br />
  {/each}
</ul>
