<script lang="ts">
  export let data;
  console.log(data);
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<h2>My name is Pip, i'm a PITA</h2>
<br />
<p>I'm {data.age} years old</p>

<ul>
  {#each data.users as user}
    <li>{user.name}</li>
    <br />
  {/each}
</ul>
