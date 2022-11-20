<script>
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
      <div class="d-flex flex-row justify-content-center mt-auto">
        <a
          href="{link}"
          target="_blank"
          rel="noreferrer"
          role="button" 
          class="btn btn-primary mt-3">
          Conheça 
        </a>
      </div>      
    </div>
  </div>
</div>

<style>
  :global()  a {
    font-weight: bold;
  }

  :global(.dark) a {
    background-color: #bd93f9 !important;
    border-color: #bd93f9 !important;
  }

  :global(.dark) a:hover {
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
