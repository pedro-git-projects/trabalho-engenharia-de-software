<script>
	import pedro from "../profiles/pedro.jpg"
	import alisson from "../profiles/alisson.png"
	import { goto } from '$app/navigation'
	const goToPortfolio = (path) => {
		goto(`/portfolios/${path}`)
	}
</script>


<div class="row row-cols-1 row-cols-md-3 g-4">
	<div class="col">
		<div class="card bg-light"> 
			<img class="card-img-top" src={pedro} alt="pedro-pfp">
			<div class="card-body">
				<h5 class="card-title">Pedro Pereira</h5>
				<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam architecto nulla omnis odit excepturi, ipsum ex expedita illum sunt sed cupiditate libero sint fuga eligendi voluptatum molestiae accusamus aperiam!</p>
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
			<img class="card-img-top" src={alisson} alt="alisson-pfp">
			<div class="card-body">
				<h5 class="card-title">Alisson</h5>
				<p class="card-text">lorem ipsum dolor sit amet consectetur adipisicing elit. minima aliquam architecto nulla omnis odit excepturi, ipsum ex expedita illum sunt sed cupiditate libero sint fuga eligendi voluptatum molestiae accusamus aperiam!</p>
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
			<img class="card-img-top" src={pedro} alt="alisson-pfp">
			<div class="card-body">
				<h5 class="card-title">Pedro Henrique</h5>
				<p class="card-text">lorem ipsum dolor sit amet consectetur adipisicing elit. minima aliquam architecto nulla omnis odit excepturi, ipsum ex expedita illum sunt sed cupiditate libero sint fuga eligendi voluptatum molestiae accusamus aperiam!</p>
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
		font-family: 'JMH Cthulhumbus UGalt1'; 
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
