"use client"

import React, { createContext, ReactNode, useReducer } from "react";

/**
 * It consists of a react context in charge of handling 
 * a useReducer state that stores weather if the current
 * visibility state matches target visibility. 
 * 
 * For instance, if we are looking for the state to be
 * false, that is, we want to track weather the visibility 
 * is hidden, we can indicate the target visibility to be false.  
 * The target target visibility is true by default.
 * 
 * May react component may use useCheckBackdropVisibility to gain
 * access to the context reducer state.
 */


type VisibilityInfo = {
  matchesVisibility: boolean;
}

export const BackdropCtx = createContext<
  { vinfo: VisibilityInfo, setv: (newValue: boolean) => void } | null
>(null);

/**
 * The strategy consists of handling the useReducer state logic within the context provider component.
 */
export default function BackdropProvider({ target = true, children }: { target?: boolean, children: ReactNode }) {
  const visibilityReducer = (_: VisibilityInfo, newValue: boolean) => {
    return ({
      matchesVisibility: newValue === target
    });
  }
  const [vinfo, setv] = useReducer(visibilityReducer, { matchesVisibility: !target });

  return <BackdropCtx.Provider value={{ vinfo, setv }}>{children}</BackdropCtx.Provider>
}