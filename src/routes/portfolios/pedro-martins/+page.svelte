<svelte:head>
	<title>Portfólio - Pedro Martins</title>
	<meta name="portfólio" content="Pedro Martins's portfólio" />
</svelte:head>

<script>
	import Thumbnail from "../../../components/Thumbnail.svelte";
	import { pedroMartins } from "../../../components/programmer.js";
	import BackToTop from "../../../components/BackToTop.svelte";

	const anchors = ["sobre", "experiência", "educação", "habilidades", "premiações"];

	const scrollIntoView = ({ target }) => {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<h1>{pedroMartins.name}</h1>
<hr>
<span class="mt-2"></span>

<div class="container-fluid">
{#each anchors as anchor}
<a href="#anchor-{anchor}" class="p-3" on:click={scrollIntoView}>
	{anchor}
</a>
{/each}
</div>
<span class="mb-4"></span>


<Thumbnail image={pedroMartins.picture}/>


{#each anchors as anchor}
<h2 id="anchor-{anchor}">{anchor}</h2>
<BackToTop/>
{/each}
