import CommandDisplay from "./components/CommandDisplay";
import Experience from "./components/Experience";
import Providers from "./providers/Providers";

function App() {
	return (
		<Providers>
			<div className="h-[100vh] relative">
				<Experience />
			</div>
			<CommandDisplay />
		</Providers>
	);
}

export default App;
