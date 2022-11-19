<script>
	export let titulo;
</script>

<div class="container">
	<div class="row">
		<div class="col text-center mb-3"> <h1>{titulo}</h1>
		</div>
	</div>
</div>

<style>
	:global() h1 { 
		font-family: cursive;
		font-size: 4em;
		color:#98971a;
	}

	:global(.dark) h1 { 
		color:#50fa7b;
	}
</style>
