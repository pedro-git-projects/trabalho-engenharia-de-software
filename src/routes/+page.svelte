<svelte:head>
	<title>Portfólio - Home</title>
</svelte:head>

<script>
	import { pedroMartins, alisson, PedroHenrique} from "../components/programmer";
	import IndexCard from "../components/IndexCard.svelte";
	import Title from "../components/Title.svelte";
</script>

<Title titulo={"Portfólios"}/>
<div class="row">
	<IndexCard 
		image={pedroMartins.picture}
		title={pedroMartins.name}
		description={pedroMartins.description}
		link="pedro-martins"
	/>

	<IndexCard 
		image={alisson.picture}
		title={alisson.name}
		description={alisson.description}
		link="alisson"
	/>

	<IndexCard 
		image={PedroHenrique.picture}
		title={PedroHenrique.name}
		description={PedroHenrique.description}
		link="pedro-henrique"
	/>
</div>
