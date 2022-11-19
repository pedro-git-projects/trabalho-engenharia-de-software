<script>
	import { page } from '$app/stores'
	import Toggle from './Toggle.svelte'
</script>

<header>
	<nav id="nav" class="navbar shadow-sm navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<div class="navbar-brand">
				<a data-sveltekit-prefetch href="/">Home</a>
			</div>

			<button 
	   			class="navbar-toggler" 
	   			type="button" 
				data-bs-toggle="collapse" 
 				data-bs-target="#navbarNav" 
 				aria-controls="navbarNav" 
 				aria-expanded="false" 
 				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">

					<li class="nav-item" class:active={$page.url.pathname === '/portfolios/pedro-martins'}>
						<div class="nav-link">
							<a data-sveltekit-prefetch href="/portfolios/pedro-martins">Pedro</a>
						</div>
					</li>
			
				<li class="nav-item">
					<div class="nav-link" class:active={$page.url.pathname === "/portfolios/pedro-henrique"}>
						<a data-sveltekit-prefetch href="/portfolios/pedro-henrique">PH</a>
					</div>
				</li>

				<li class="nav-item">
					<div class="nav-link" class:active={$page.url.pathname === "/portfolios/alisson"}>
						<a data-sveltekit-prefetch href="/portfolios/alisson">Alisson</a>
					</div>
				</li>
					<Toggle/>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
	:global(a) {
		color: var(--link-color);
		text-decoration: none;
	}

	:global(a:hover) {
		color: #d79921;
		text-decoration: none;
	}

	:global(a.dark) {
		color: #f8f8f2;
		text-decoration: none;
	}

	:global(a.dark:hover) {
		color: #ff79c6;
		text-decoration: none;
	}

	:global() .navbar-toggler-icon {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(251, 241, 199, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");	
	}

	:global(.dark) .navbar-toggler-icon {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(248, 248, 242, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");	
	}

</style>
