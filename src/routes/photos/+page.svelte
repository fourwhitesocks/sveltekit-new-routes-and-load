<script lang="ts">
  export let data;
  //this is showing  users destructured so you don't have to go data.users in the each block this from:  https://www.youtube.com/watch?v=EQy-AYhZIlE&ab_channel=Huntabyte 4:29 in!!
  const { ImageSizeDetails } = data;
</script>

<ul>
  {#each ImageSizeDetails as ImageSizeDetail}
    <li>{ImageSizeDetail.ImageUrlTemplate}</li>

    <br />
  {/each}
</ul>
