import pedroImg from '../lib/pedro.jpg';
import alissonImg from '../lib/alisson.png';
import pHImg from '../lib/PedroHenrique.jpg';

class Programmer {
	constructor(name, picture, description) {
		this.name = name;
		this.picture = picture;
		this.description = description;
	}
}

const pedroDescription = `Atualmente cursando Análise e Desenvolvimento de Sistemas no IESB Pedro é um entusiasta de softaware livre e cypherpunk. Desenvolvimento web fullstack é sua área de concentração tendo criado aplicações com diversos frameworks de frontened como Svelte, React e Yew. Backend, como SpringBoot <Java>, Go, Express <Typescript> e Crow <C++>. Tem experiência como desenvolvedor backend tendo trabalhado na NTT Data e no Banco Itaú.`;

const alissonDescription = `Atualmente Alisson é servidor público do GDF, estuda Análise e Desenvolvimento de Sistemas no IESB, é pai de duas cachorras e já foi estudante de física na UnB, mas não continuou o curso. Seu principal objetivo é explorar e aprender mais sobre o universo do desenvolvimento web e da programação no geral. Seus estudos se concentram atualmente em JavaScript, TypeScript, bancos de dados SQL e NoSQL com foco no desenvolvimento backend.`;

const pHDescription = `"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`;

const pedroMartins = new Programmer('Pedro Martins', pedroImg, pedroDescription);
const alisson = new Programmer('Alisson', alissonImg, alissonDescription);
const PedroHenrique = new Programmer('Pedro Henrique', pHImg, pHDescription);

export { pedroMartins, alisson, PedroHenrique };
