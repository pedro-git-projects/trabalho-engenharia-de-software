import pedroImg from "../profiles/pedro.jpg";
import alissonImg from "../profiles/alisson.png";
import pHImg from "../profiles/pedro.jpg";

class Programmer {
	constructor(name, picture, description) {
		this.name = name;
		this.picture = picture;
		this.description = description;
	}
}

const pedroDescription = `"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`

const alissonDescription = `"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`

const pHDescription = `"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.`
 

const pedroMartins = new Programmer("Pedro Martins", pedroImg,  pedroDescription);
const alisson = new Programmer("Alisson", alissonImg, alissonDescription);
const pH = new Programmer("Pedro Henrique", pHImg, pHDescription);

export { pedroMartins, alisson, pH };
