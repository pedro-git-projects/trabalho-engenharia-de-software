<script>
	import { pedroMartins, alisson, pH} from "../components/programmer";
	import { goto } from '$app/navigation'
	const goToPortfolio = (path) => {
		goto(`/portfolios/${path}`)
	}
</script>


<div class="row row-cols-1 row-cols-md-3 g-4">
	<div class="col">
		<div class="card bg-light"> 
			<img class="card-img-top" src={pedroMartins.picture} alt="pedro-pfp">
			<div class="card-body">
				<h5 class="card-title">{pedroMartins.name}</h5>
				<p class="card-text">{pedroMartins.description}</p>
				<button 
					on:click="{() => goToPortfolio("pedro-martins")}"
					type="button" 
  					class="btn btn-primary mt-3">
  					Conheça
				</button>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card bg-light"> 
			<img class="card-img-top" src={alisson.picture} alt="alisson-pfp">
			<div class="card-body">
				<h5 class="card-title">{alisson.name}</h5>
				<p class="card-text">{alisson.description}</p>
				<button 
					on:click="{() => goToPortfolio("alisson")}"
					type="button" 
  					class="btn btn-primary mt-3">
  					Conheça
				</button>
			</div>
		</div>
	</div>

	<div class="col">
		<div class="card bg-light"> 
			<img class="card-img-top" src={pH.picture} alt="alisson-pfp">
			<div class="card-body">
				<h5 class="card-title">{pH.name}</h5>
				<p class="card-text">{pH.description}</p>
				<button 
					on:click="{() => goToPortfolio("pedro-henrique")}"
					type="button" 
  					class="btn btn-primary mt-3">
 					 Conheça
				</button>
			</div>
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
