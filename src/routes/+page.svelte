<svelte:head>
	<title>Portfólio - Home</title>
</svelte:head>

<script>
	import pedro from "../profiles/pedro.jpg"
	import alisson from "../profiles/alisson.png"
	import { goto } from '$app/navigation'

	const goToPedro = () => {
		goto("/portfolios/pedro-martins")
	}
	const goToAlisson = () => {
		goto("/portfolios/alisson")
	}	
	const goToPH= () => {
		goto("/portfolios/pedro-henrique")
	}
</script>

<div class="container">
	<div class="row">
		<div class="col text-center mb-3"> <h1>Portfólio</h1>
		</div>
	</div>
</div>

<div class="row row-cols-1 row-cols-md-3 g-4">
	<div class="col">
		<div class="card"> 
			<img class="card-img-top" src={pedro} alt="pedro-pfp">
			<div class="card-body bg-light">
				<h5 class="card-title">Pedro Pereira</h5>
				<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam architecto nulla omnis odit excepturi, ipsum ex expedita illum sunt sed cupiditate libero sint fuga eligendi voluptatum molestiae accusamus aperiam!</p>
				<button 
	  				on:click="{goToPedro}"
	   				type="button" 
	  				class="btn btn-primary mt-3">
					Conheça
				</button>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="card"> 
			<img class="card-img-top" src={alisson} alt="alisson-pfp">
			<div class="card-body bg-light">
				<h5 class="card-title">alisson</h5>
				<p class="card-text">lorem ipsum dolor sit amet consectetur adipisicing elit. minima aliquam architecto nulla omnis odit excepturi, ipsum ex expedita illum sunt sed cupiditate libero sint fuga eligendi voluptatum molestiae accusamus aperiam!</p>
				<button 
					on:click="{goToAlisson}"
	   				type="button" 
	  				class="btn btn-primary mt-3">
					conheça
				</button>
			</div>
		</div>
	</div>

<div class="col">
		<div class="card"> 
			<img class="card-img-top" src={pedro} alt="alisson-pfp">
			<div class="card-body bg-light">
				<h5 class="card-title">Pedro Henrique</h5>
				<p class="card-text">lorem ipsum dolor sit amet consectetur adipisicing elit. minima aliquam architecto nulla omnis odit excepturi, ipsum ex expedita illum sunt sed cupiditate libero sint fuga eligendi voluptatum molestiae accusamus aperiam!</p>
				<button 
					on:click="{goToPH}"
	   				type="button" 
	  				class="btn btn-primary mt-3">
					conheça
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	:global() h1 { 
		font-family: 'JMH Cthulhumbus UGalt1'; 
		color:#98971a;
	}

	:global(.dark) h1 { 
		color:#50fa7b;
	}

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
</style>

