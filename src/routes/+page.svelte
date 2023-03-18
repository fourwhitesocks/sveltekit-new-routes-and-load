<script lang="ts">
  export let data;
  //this is showing  users destructured so you don't have to go data.users in the each block this from:  https://www.youtube.com/watch?v=EQy-AYhZIlE&ab_channel=Huntabyte 4:29 in!!
  const { users } = data;
  //console.log(data);
  import { formatMe } from '$lib/components/utils/FormatText';
  import Hero from '$lib/components/Hero.svelte';
</script>

<br />
<h1 class="text-3xl font-bold underline">
  SvelteKit basic sandbox a practice playground for pulling in data:)
</h1>
<br />
{formatMe('Amy')}
<br />
<Hero />
<br />
<h2>
  Below just pulling in names from a pulic json api: https://jsonplaceholder.typicode.com/users
</h2>
<br />
<p>I'm {data.age} years old</p>
<br />
<br />
<br />
<ul>
  {#each users as user}
    <!-- subscring is a js method to chop charachters -->
    <!-- <li>{user.name.substring(0, 5)}</li> -->

    <li>{user.name}</li>

    <li>{user.email}</li>
    <br />
  {/each}
</ul>
