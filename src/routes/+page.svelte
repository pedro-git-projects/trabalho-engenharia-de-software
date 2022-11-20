<svelte:head>
	<title>Portfólio - Home</title>
</svelte:head>

<script>
	import { pedroMartins, alisson, pH} from "../components/programmer";
	import IndexCard from "../components/IndexCard.svelte";
	import CardGrid from "../components/CardGrid.svelte";
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
		image={pH.picture}
		title={pH.name}
		description={pH.description}
		link="pedro-henrique"
	/>
</div>
