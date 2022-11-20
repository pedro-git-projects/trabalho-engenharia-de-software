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

<style>
  :global() button {
    font-weight: bold;
  }

  :global(.dark) button {
    background-color: #50af7b !important;
    border-color: #50af7b !important;
  }

  :global(.dark) button:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);		
  }
</style>
