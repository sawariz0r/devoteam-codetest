import { create } from "zustand";

type PositionState = {
	position: [number, number, string];
	updatePosition: (position: [number, number, string]) => void;
	rotate: (direction: "L" | "R") => void;
	move: (direction: "F" | "B") => void;
};

export const usePosition = create<PositionState>((set, get) => ({
	position: [0, 0, "N"],
	updatePosition: position => set(state => ({ ...state, position })),
	rotate: direction => {
		const state = get();
		const directions = ["N", "E", "S", "W"];
		const currentIndex = directions.indexOf(state.position[2]);
		const nextIndex = (currentIndex + (direction === "R" ? 1 : -1) + 4) % 4;
		set(state => ({
			...state,
			position: [state.position[0], state.position[1], directions[nextIndex]],
		}));
	},
	move: direction => {
		const state = get();
		const bearing = state.position[2];
		if (bearing === "N") {
			set(state => ({
				...state,
				position: [
					state.position[0],
					state.position[1] + (direction === "F" ? 1 : -1),
					state.position[2],
				],
			}));
		}


    if (bearing === "S") {
      set(state => ({
        ...state,
        position: [
          state.position[0],
          state.position[1] + (direction === "F" ? -1 : 1),
          state.position[2],
        ],
      }));
    }

		if (bearing === "E") {
			set(state => ({
				...state,
				position: [
					state.position[0] + (direction === "F" ? 1 : -1),
					state.position[1],
					state.position[2],
				],
			}));
		}

    if (bearing === "W") {
      set(state => ({
        ...state,
        position: [
          state.position[0] + (direction === "F" ? -1 : 1),
          state.position[1],
          state.position[2],
        ],
      }));
    }
	},
}));
