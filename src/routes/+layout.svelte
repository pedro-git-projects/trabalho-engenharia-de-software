<script>
	import Footer from '../components/Footer.svelte'
	import Dropdown from '../components/Dropdown.svelte';
</script>

<Dropdown/>
<div class="wrapper d-flex flex-column min-vh-100 px-5 mt-3">
	<slot></slot>
</div>
<Footer/>


<style>
:root{
		--bg-color: #282828;
		--card-body: red;
		--text-color: #fbf1c7;
		--link-color: #fbf1c7;
		--bootstrap-nav: #fbf1c7;
	}

	:global(body) {
		background: var(--bg-color);
		color: var(--text-color);
		transition: background-color 0.3s;
		font-family: 'Roboto', sans-serif;	
	}

	:global(body.dark) {
		--bg-color: #282a36;
		--text-color: #f8f8f2;
		--link-color: #f8f8f2;
	}
</style>
