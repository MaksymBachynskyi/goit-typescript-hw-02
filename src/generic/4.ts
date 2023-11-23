/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Animal {
	title: string;
}
class Component<T> {
	constructor(public props: T) {}
}

class Page extends Component<Animal> {
	pageInfo() {
		console.log(this.props.title);
	}
}

export {};

const a = new Page({ title: 'a' });
