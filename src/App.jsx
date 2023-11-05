// function App() {
// 	return (
// 		<div>
// 			<h1>test</h1>
// 		</div>
// 	);
// }

// function App() {
// 	return (
// 		<div>
// 			<h1>Function React</h1>
// 		</div>
// 	);
// }

// const App = () => {
// 	return (
// 		<div>
// 			<h1>Hi!</h1>
// 		</div>
// 	);
// };

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const App = () => {
	let name = "Bram";
	let isSingle = false;
	const renderStatus = (status) => {
		return status ? <h2>Saya single</h2> : <h2>Saya sudah menikah</h2>;
	};

	return (
		<div>
			<Navbar />
			<Hero />
			<Footer />
			{/* <h1>Hi {name}</h1>
			<p>{isSingle ? "Saya single" : "Saya sudah menikah"}</p>
			{isSingle ? <p>Saya single</p> : <p>Saya sudah menikah</p>}
			{renderStatus(true)} */}
		</div>
	);
};

export default App;
