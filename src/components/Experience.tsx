import { Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import Cube from "./Cube";

const Experience = () => {
	const { gridSize, ...gridConfig } = useControls({
		gridSize: [10.5, 10.5],
		cellSize: { value: 1, min: 0, max: 10, step: 0.1 },
		cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
		cellColor: "#6f6f6f",
		sectionSize: { value: 1, min: 0, max: 10, step: 0.1 },
		sectionThickness: { value: 1, min: 0, max: 5, step: 0.1 },
		sectionColor: "#9d4b4b",
		fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
		fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
		followCamera: false,
		infiniteGrid: true,
	});

	return (
		<>
			<Leva collapsed />
			<Canvas
				className="w-full h-full"
				shadows
				camera={{ position: [12, 6, -2], fov: 35 }}>
				<OrbitControls />
				<ambientLight intensity={0.7} />
				<Grid position={[0.5, -0.5, 0.5]} args={gridSize} {...gridConfig} />
				<Cube startPosition={[1, 1, "E"]} />
			</Canvas>
		</>
	);
};

export default Experience;
