import { useState } from 'react';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const onChange = (e) => setText(e.target.value);
	const onChangeA = (e) => setA(parseInt(e.target.value));
	const onChangeB = (e) => setB(parseInt(e.target.value));
	const onSend = () => {
		alert(text);
	};
	const sumar = () => {
		alert(a+b);
	};
	return (
		<div className="App">
			<h1>hola mundo</h1>
			<input placeholder="..." value={text} onChange={onChange} />
			<button onClick={onSend}>Enviar</button>
			<input type="number" placeholder="..." value={a} onChange={onChangeA} />
			<input type="number" placeholder="..." value={b} onChange={onChangeB} />
			<button onClick={sumar}>Sumar</button>
		</div>
	);
}

export default App;
