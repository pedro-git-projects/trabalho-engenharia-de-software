<svelte:head>
	<title>Portfólio - Alisson</title>
	<meta name="portfólio" content="Alisson's portfólio" />
</svelte:head>

<script>
	import js from "../../../lib/projects/js.jpeg";

	import ProjectCard from "../../../components/ProjectCard.svelte";
	import Thumbnail from "../../../components/Thumbnail.svelte";
	import BackToTop from "../../../components/BackToTop.svelte";
	
	import { alisson } from "../../../components/programmer.js";

	const anchors = ["Sobre", "Habilidades", "Projetos"];

	const scrollIntoView = ({ target }) => {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<h1>{alisson.name}</h1>
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

<Thumbnail image={alisson.picture}/>

<section class="container mt-2">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[0]}">{anchors[0]}</h2>
			<hr>
			<p>
				Alisson é um entusiasta de softaware livre, porém na maioria das vezes prefere piratear softwares pagos já consolidados no mercado. Utiliza <i>Windows</i> como SO, pois não tem coragem de migrar para o <i>linux</i> e perder a oportunidade de jogar igual Pro Player.
			</p>
			<div class="text-center">
				<figure class="figure">
					<img src="{js}" class="figure-img img-fluid rounded" alt="js">
					<figcaption class="figure-caption">Imagem JavaScript</figcaption>
				</figure>
			</div>
			<p>
				Apesar de querer seguir sua carreira como desenvolvedor <i>Full Stack</i>, ele possui mais interesse pelo backend, pois teme escolher e combinar a paleta de cores para compor seus sites.
				<br>
				Atualmente sues estudos se concentram nas linguagens <i>JavaScript</i> e <i>TypeScript</i> mesclando os diversos paradigmas de programação, sobretudo orientação a objetos.
				<br>
				Ele tem colecionado uma série de certificado de cursos livres das mais diversas tecnologias e áreas de conhecimento.
			</p>
			<p>
				Ele foi estudante de física da <i>Universidade de Brasília (UnB)</i> com a pretensão de se tornar professor, entretando acabou deixando seu curso por uma série de fatores. Apesar disso tudo, não deixou de apreciar as ciências puras e continua matutando a ideia de se tornar um educador.
			</p>
			<p>
				Alisson trabalha atualmente para o <i>Governo do Distrito Federal</i> como Técnico em Assistência Social da <i>Secretaria de Desenvolvimento Social</i>. Antes de ingressar no serviço público, o serviço social nunca havia passado pela sua cabeça. Ele atende diariamente a população mais vulnerável do Distrito Federal e vem adiquirindo diversas experiências como bagagem.
			</p>
			<p>
				Nas horas vagas, ele se interessa por arte em forma de música, dança e audiovisual, além de outros idiomas como inglês e mais recentemente por francês.
			</p>
			<p>
				Seu principal anseio atualmente é migrar para a área de tecnologia, construir uma carreira sólida em desenvolvimento WEB e imigrar para o segundo maior país do mundo para trabalhar até congelar.
			</p>
			<div class="text-center mb-4">
				<figure class="figure">
					<img src="{js}" class="figure-img img-fluid rounded" alt="js">
					<figcaption class="figure-caption">Imagem JavaScript</figcaption>
				</figure>
			</div>
			<BackToTop/>
		</div>
	</div>
</section>

<section class="container mt-4">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[1]}">{anchors[1]}</h2>
			<hr>
			<h4>Frontend:</h4>
			<ul>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>Bootstrap</li>
				<li>Svelte</li>
			</ul>
			<h4>Backend:</h4>
			<ul>
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>Express</li>
			</ul>
			<h4>Databases:</h4>
			<ul>
				<li>MySQL</li>
				<li>MongoDB</li>
			</ul>
			<h4>Desktop:</h4>
			<ul>
				<li>...</li>
			</ul>
			<h4>Mobile:</h4>
			<ul>
				<li>...</li>
			</ul>
			<h4>Tools:</h4>
			<ul>
				<li>Linux</li>
				<li>ShellScript</li>
				<li>Git</li>
				<li>Pivotal Tracker</li>
			</ul>
			<BackToTop/>
		</div>
	</div>
</section>

<section class="container mt-4">
	<div class="row">
		<div class="col">
			<h2 id="anchor-{anchors[3]}">{anchors[3]}</h2>
			<hr>
			<div class="row mt-4">
				<ProjectCard
				image={js}
				title="Calendário Anual Universal"
				description="Aplicação que renderiza no terminal o calendário de todos os meses do ano informado, seja ele bissexto ou não."
				link="https://github.com/Alisson3366/calendarios-javascript"
				/>
				<ProjectCard
				image={js}
				title="Fã page da banda The Strokes"
				description="Site de fã feito para fãs da banda The Strokes, com informações, músicas e produtos."
				link="https://github.com/Alisson3366/strokes-community"
				/>
				<ProjectCard
				image={js}
				title="Calculadora de Média Individual Segundo Creitério de Avaliação do IESB"
				description="Aplicação que renderiza uma página HTML com a média e a mensão de cada aluno inserido."
				link="https://github.com/Alisson3366/individual-average-calculator"
				/>
				<ProjectCard
				image={js}
				title="Consumo de API com JavaScript"
				description="Aplicação que consome uma API Rest (The-Cat-API) para renderizar uma imagem aleatória de gatinho."
				link="https://github.com/Alisson3366/pivotal-tutorial/blob/main/index.html"
				/>
				<ProjectCard
				image={js}
				title="Meu Amigo PET - API de encontro de pets"
				description="API RESTful que visa conectar pais de pets ou aspirantes ao cargo. Escrita em JavaScript, autenticada com JWT e com persistência via MongoDB."
				link="https://github.com/Alisson3366/projeto-de-back-end"
				/>
			</div>
			<div class="mt-2">
				<BackToTop/>
			</div>		
		</div>
	</div>
</section>

<style>
	:global() .p-3:hover {
		color: #d79921;
	}
	:global() .p-3 {
		color: #fbf1c7;
	}
	:global(.dark) .p-3:hover {
		color: #ff79c6;
	}
	:global(.dark) .p-3 {
		color: #f8f8f2;
	}
	section {
		min-height: 100vh;
	}
</style>

