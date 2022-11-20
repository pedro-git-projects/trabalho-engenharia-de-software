<script>
  import { goto } from '$app/navigation'
  export let image;
  export let title;
  export let description;
  export let link;
</script>

<div class="col-lg-4 mb-3 d-flex align-items-stretch">
  <div class="card bg-light">
    <img src="{image}" class="card-img-top" alt="card top">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{title}</h5>
      <p class="card-text mb-4">{description}</p>
      <button 
        on:click="{() => goto(link)}"
        type="button" 
        class="btn btn-primary mt-3">
        Visitar	
      </button>
    </div>
  </div>
</div>

<style>
  :global() button {
    font-weight: bold;
  }

  :global(.dark) button {
    background-color: #bd93f9 !important;
    border-color: #bd93f9 !important;
  }

  :global(.dark) button:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);		
  }

  :global(.dark) .card-body {
    background-color: #4c566a;
    color:#eceff4;
  }

  :global(.dark) .card {
    background-color: #e5e9f0;
    color:#eceff4;
  }
</style>
