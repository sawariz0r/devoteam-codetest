import { useState } from "react";
import { useCommand } from "../stores/useCommand";
import { usePosition } from "../stores/usePosition";

const CommandDisplay = () => {
	const [cubeCommand, setCubeCommand] = useState("");
	const command = useCommand();
	const position = usePosition();

	const commandStyles = {
		current: "text-white font-bold",
		rest: "text-slate-400",
	};

	const splitCommands = command.userCommand.split("");

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		if (!value) return;

		const latestLetter = value[value.length - 1];
		const validInputs = ["F", "R", "B", "L"];
		if (!validInputs.includes(latestLetter.toUpperCase())) return;

		const uppercaseValue = value.toUpperCase();
		setCubeCommand(uppercaseValue);
	};

	const handleCubeCommand = () => {
		if (!cubeCommand) return;
		command.updateUserCommand(cubeCommand);
		command.updateUserCommandIndex(0);
		setCubeCommand("");
	};

	return (
		<div className="absolute p-4 bottom-0 w-full h-24 bg-slate-700">
			<div className="flex justify-evenly">
				<div className="flex h-full">
					<input
						data-cy="command-input"
						className="bg-slate-300 rounded-l-md px-2 py-1 outline-none text-slate-800"
						type="text"
						value={cubeCommand}
						onChange={handleInput}
					/>
					<div className="w-[1px] h-full bg-slate-400" />
					<button
						data-cy="command-run"
						className="px-2 py-1 bg-slate-300 text-slate-800 rounded-r-md"
						onClick={handleCubeCommand}>
						Run
					</button>
				</div>

				<div className="flex">
					<p>
						Progress:{" "}
						{splitCommands.map((c, i) => (
							<span
								key={i}
								className={`inline-block ${
									i === command.userCommandIndex
										? commandStyles.current
										: commandStyles.rest
								}`}>
								{c}
							</span>
						))}
					</p>
				</div>

				<div className="flex">
					<p data-cy="position">Position: {position.position.join(",")}</p>
				</div>
			</div>
		</div>
	);
};

export default CommandDisplay;
