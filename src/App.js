import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div id="topPage">
			<Navbar></Navbar>
			<Header></Header>
			<Main></Main>
			<Footer></Footer>
		</div>
	);
}

export default App;
