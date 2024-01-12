import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import React, { useMemo } from "react";

type Props = {
	children: React.ReactNode;
};

enum Controls {
	forward = "forward",
	back = "back",
	left = "left",
	right = "right",
}

const KeyboardControlsProvider = (props: Props) => {
	const map = useMemo<KeyboardControlsEntry<Controls>[]>(
		() => [
			//{ name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
			//{ name: Controls.back, keys: ["ArrowDown", "KeyS"] },
			//{ name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
			//{ name: Controls.right, keys: ["ArrowRight", "KeyD"] },
		],
		[]
	);
	return <KeyboardControls map={map}>{props.children}</KeyboardControls>;
};

export default KeyboardControlsProvider;
