import { create } from "zustand";

type CommandState = {
	userCommand: string;
	userCommandIndex: number;
	userCommmandCompleted: boolean;
	updateUserCommand: (command: string) => void;
	updateUserCommandIndex: (index: number) => void;
	updateUserCommandCompleted: (status: boolean) => void;
};

export const useCommand = create<CommandState>(set => ({
	userCommand: "",
	userCommandIndex: 0,
	userCommmandCompleted: false,
	updateUserCommand: command =>
		set(state => ({ ...state, userCommand: command })),
	updateUserCommandIndex: index =>
		set(state => ({ ...state, userCommandIndex: index })),
	updateUserCommandCompleted: status =>
		set(state => ({ ...state, userCommmandCompleted: status })),
}));
