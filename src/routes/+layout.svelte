<script>
  import '../app.css';
</script>

<!-- data sveltekit prefecth will prerender the fetch when user hovers over nav with mouse -->
<nav>
  <a href="/">Home</a>
  <a href="/posts" data-sveltekit-prefetch>Posts</a>
  <a href="/products" data-sveltekit-prefetch>Products</a>
  <a href="/photos" data-sveltekit-prefetch>Images</a>
</nav>

<slot />

<style>
  nav {
    display: flex;
  }
  nav a {
    margin-right: 1rem;
  }
</style>
