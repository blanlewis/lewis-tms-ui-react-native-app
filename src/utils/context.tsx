"use client";
import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import { customHookReducer } from "./reducer";
import { CustomHookAction, customHookInitialState, CustomHookState } from "./types";

interface CustomHookContextValue {
    state: CustomHookState;
    dispatch: Dispatch<CustomHookAction>;
}

const CustomHookContext = createContext<CustomHookContextValue | null>(null);

const CustomHookProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(customHookReducer, customHookInitialState);
    const value = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <CustomHookContext.Provider value={value}>
            {children}
        </CustomHookContext.Provider>
    );
};

export { CustomHookContext, CustomHookProvider };

