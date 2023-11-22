/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T extends Animal> {
	constructor(public props: T) {}
}

class Page extends Component<Animal> {
	pageInfo() {
		console.log(this.props.title);
	}
}

export {};
interface Animal {
	title: string | number;
}
const a = new Page({ title: 'a' });
