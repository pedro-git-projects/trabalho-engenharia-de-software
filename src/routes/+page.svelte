<svelte:head>
	<title>Portfólio - Home</title>
</svelte:head>

<script>
	import { goto } from '$app/navigation'

	const goToPedro = () => {
		goto("/portfolios/pedro")
	}
</script>

<div class="container">
	<div class="row">
		<div class="col text-center mb-3"> <h1>Portfólio</h1>
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

