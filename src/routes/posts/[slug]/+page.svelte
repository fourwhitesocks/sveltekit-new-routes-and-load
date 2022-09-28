<script lang="ts">
  export let data;

  console.log(data);
</script>

invoice do I show up?

<h1>{data.post.title}</h1>
<p>{data.post.excerpt}</p>

<!-- <p>{@html data.post.excerpt}</p>
 this worked also but think it's for mixed html content field-->
