import { Html } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";

import { useCommand } from "../stores/useCommand";
import { usePosition } from "../stores/usePosition";

type Props = {
	// 1,2,N or 1,2,S
	startPosition: [number, number, string];
};

const Cube = (props: Props) => {
	const groupRef = useRef<Group>(null);
	const commandState = useCommand();
	const positionState = usePosition();

	const executeCommands = async (commands: string) => {
		for (let i = 0; i < commands.length; i++) {
			await executeCommand(commands[i], i);
			await new Promise(resolve => setTimeout(resolve, 1000));
		}
	};

	const executeCommand = (command: string, index: number) => {
		return new Promise(resolve => {
			if (!groupRef.current) return;

			if (command === "R" || command === "L") {
				const rotationAmount = Math.PI / 2;
				const rotationDirection = command === "R" ? -1 : 1;

				groupRef.current.rotation.y += rotationAmount * rotationDirection;
				positionState.rotate(command);
			}

			if (command === "F") {
				const currentRotation = groupRef.current.rotation.y;

				groupRef.current.position.x -= Math.cos(currentRotation);
				groupRef.current.position.z += Math.sin(currentRotation);
				positionState.move(command);
			}

			if (command === "B") {
				const currentRotation = groupRef.current.rotation.y;

				groupRef.current.position.x += Math.cos(currentRotation);
				groupRef.current.position.z -= Math.sin(currentRotation);
				positionState.move(command);
			}

			commandState.updateUserCommandIndex(index);

			if (commandState.userCommand.length === commandState.userCommandIndex) {
				commandState.updateUserCommandCompleted(true);
			}

			setTimeout(resolve, 500);
		});
	};

	useEffect(() => {
		const commands = commandState.userCommand;
		executeCommands(commands);
	}, [commandState.userCommand]);

	// Set Start position
	useEffect(() => {
		if (!groupRef.current) return;

		positionState.updatePosition(props.startPosition);

		groupRef.current.position.x = -props.startPosition[0];
		groupRef.current.position.z = -props.startPosition[1];

		const rotation: Record<string, number> = {
			N: 0,
			S: Math.PI,
			E: -Math.PI / 2,
			W: Math.PI / 2,
		};

		groupRef.current.rotation.y = rotation[props.startPosition[2]];
	}, [groupRef, props.startPosition]);

	return (
		<group ref={groupRef}>
			<Html
				center
				sprite
				style={{ width: 100, height: 40 }}
				position={[0, 1, 0]}>
				<p>{/* Position like: 0,0,N */}</p>
			</Html>
			<mesh>
				<boxGeometry args={[1, 1, 1]} />

				<meshBasicMaterial attach="material-0" color="#FFFFFF" />
				<meshBasicMaterial attach="material-1" color="#FF0000" />
				<meshBasicMaterial attach="material-2" color="#FFFFFF" />
				<meshBasicMaterial attach="material-3" color="#FFFFFF" />

				<meshBasicMaterial attach="material-4" color="#FFFFFF" />
				<meshBasicMaterial attach="material-5" color="#FFFFFF" />
			</mesh>
			<mesh position={[-0.3, 0.6, 0.3]}>
				<boxGeometry args={[0.2, 0.2, 0.2]} />
				<meshBasicMaterial color="#000000" />
			</mesh>

			<mesh position={[-0.3, 0.6, -0.3]}>
				<boxGeometry args={[0.2, 0.2, 0.2]} />
				<meshBasicMaterial color="#000000" />
			</mesh>

			<mesh position={[-0.3, 0.1, 0.6]}>
				<boxGeometry args={[0.2, 0.6, 0.2]} />
				<meshBasicMaterial color="#000000" />
			</mesh>

			<mesh position={[-0.3, 0.1, -0.6]}>
				<boxGeometry args={[0.2, 0.6, 0.2]} />
				<meshBasicMaterial color="#000000" />
			</mesh>
		</group>
	);
};

export default Cube;
