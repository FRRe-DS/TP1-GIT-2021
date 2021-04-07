import { useState } from 'react';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const onChange = (e) => setText(e.target.value);
	const onSend = () => {
		alert(text);
	};
	return (
		<div className="App">
			<h1>hola mundo</h1>
			<input placeholder="..." value={text} onChange={onChange} />
			<button onClick={onSend}>Enviar</button>
		</div>
	);
}

export default App;
