<script lang="ts">
  export let data;

  const { ImageSizeDetails } = data;
  console.log(ImageSizeDetails);
</script>

<img src="https://photos.smugmug.com/Owls/i-ksjGKKg/0/83d979a7/M/ZOM06924-M.jpg" alt="owl pic" />

{ImageSizeDetails.ImageSizeTiny.url}

<p>
  2:00 mins in example of the get request 5:16 shows more of the get request. 17.58 in shows the
  accept header thing https://youtu.be/f6prqYlbTE4
</p>

<p>what is PageServerLoad for that was my query then I looked at the migration guide</p>

<!-- <script lang="ts">
  export let data;
  //this is showing  users destructured so you don't have to go data.users in the each block this from:  https://www.youtube.com/watch?v=EQy-AYhZIlE&ab_channel=Huntabyte 4:29 in!!
  const { ImageSizeDetails } = data;
</script>

<ul>
  {#each ImageSizeDetails as ImageSizeDetail}
    <li>{ImageSizeDetail.ImageUrlTemplate}</li>

    <br />
  {/each}
</ul> -->
