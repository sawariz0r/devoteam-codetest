import React from "react";
import KeyboardControlsProvider from "./KeyboardControlsProvider";

type Props = {
	children: React.ReactNode;
};

const Providers = (props: Props) => {
	return <KeyboardControlsProvider>{props.children}</KeyboardControlsProvider>;
};

export default Providers;
