<script>
  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="span2">
  <button type="button" class="btn btn-primary btn-sm" on:click={goTop}>Topo</button>
</div>
