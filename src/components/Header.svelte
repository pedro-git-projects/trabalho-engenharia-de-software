<script>
	import { page } from '$app/stores'
	import Toggle from './Toggle.svelte'
</script>

<header>
	<nav id="nav" class="navbar shadow-sm navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<div class="navbar-brand">
				<a class="brand" data-sveltekit-prefetch href="/">Home</a>
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
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">Portfólios</a>
						<!-- add bg-light || bg dark on toggle -->
						<ul id="drop" class="dropdown-menu bg-light">
							<li class:active={$page.url.pathname === "portfolios/pedro-martins"}>
								<a class="dropdown-item" href="/portfolios/pedro-martins">Pedro Martins</a>
							</li>
							<li class:active={$page.url.pathname === "portfolios/alisson"}>
								<a class="dropdown-item" href="/portfolios/alisson">Alisson</a>
							</li>
							<li class:active={$page.url.pathname === "portfolios/pedro-henrique"}>
								<a class="dropdown-item" href="/portfolios/pedro-henrique">Pedro Henrique</a>
							</li>
						</ul>
					</li>
					<Toggle/>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>

	:global(a.brand) {
		font-family: 'Lobster Two', cursive;
	}
	
	:global(a.nav-link) {
		color: var(--link-color);
		text-decoration: none;
	}

	:global(a.nav-link:hover) {
		color: #d79921;
		text-decoration: none;
	}
	
	:global(a.nav-link.dark) {
		color: #f8f8f8;
		text-decoration: none;
	}

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

	:global() .dropdown-item {
		color: var(--link-color);
	}

	:global() .dropdown-toggle {
		color: #fbf1c7;
	}

	:global(.dark) .dropdown-toggle {
		color: #f8f8f2;
	}
	:global() .dropdown-item:hover {
		background-color: #d79921;
		color: #fbf1c7;
	}

	:global(.dark) .dropdown-item:hover {
		background-color: #ff79c6;
		color: #f8f8f2;
	}

	:global() .navbar-toggler-icon {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(251, 241, 199, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");	
	}

	:global(.dark) .navbar-toggler-icon {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(248, 248, 242, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");	
	}

</style>
