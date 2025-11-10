import { Dispatch, useReducer, useRef, useMemo } from "react";

type TextState = {
  text: string;
}

type TextAction =
  | {
    type: "push";
    nextChar: string;
  }
  | {
    type: "pop"
  };


/**
 * Helps updating the reducer's state
 * @param action push or pop. If push is selected, a character has to be indicated.
 */
const textReducerCb = (state: TextState, action: TextAction) => {
  const newState = { ...state };
  if (action.type === "push") {
    newState.text += action.nextChar;
  }
  else if (action.type === "pop") {
    newState.text = newState.text.substring(0, newState.text.length - 1);
  }

  return newState;
}

/**
 * @param a Any string.
 * @param b Any string.
 * @returns A common prefix sequence in the two strings. 
 */
function getCommonPrefix(a: string, b: string) {
  let prefix = "";
  let matches = true;
  for (let i = 0; matches && i < a.length && i < b.length; i++) {
    if (a[i] != b[i]) {
      matches = false;
    } else {
      prefix += a[i];
    }
  }
  return prefix;
}

getCommonPrefix("h", "hello world compa");

/**
 * Searches the differences between the `textState.text` value, calculates weather if there are remaining characters or rather some has to go out, and finally reproduces an animation setting the reducer's state.
 * @param textState A text reducer state.
 * @param textDispatch The text reducer dispatch fn.
 * @param target The target text.
 * @param duration The duration that will take to place the target text.
 * @returns null if there is no need to play an animation (`textState.text` == `target`) and a reference to an interval in case there is a playing animation.
 */
function textPushAnimation(textState: TextState, textDispatch: Dispatch<TextAction>, target: string, duration: number) {
  /**
   * 1. Get the common prefix between target and the text state. 
   * 2. Remove what isn't common in the text state.
   * 3. Write in the text state what is left to reach target.
   */

  const commonPrefix = getCommonPrefix(textState.text, target);
  let deleteCount = textState.text.length - commonPrefix.length;

  let pos = textState.text.length - deleteCount;

  const intervalTime = duration / target.length;
  const interval = setInterval(() => {
    if (deleteCount > 0) {
      textDispatch({ type: "pop" });
      deleteCount--;
    } else if (pos < target.length) {
      textDispatch({ type: "push", nextChar: target[pos] });
      pos++
    }
  }, intervalTime);


  return interval;
}


export type TextAnimationParams = {
  target: string,
  duration: number
};

export function useTextAnimation({ target, duration }: TextAnimationParams) {
  const [textState, textDispatch] = useReducer(textReducerCb, { text: "" });
  const textAnimationTimeout = useRef<NodeJS.Timeout | null>(null);

  /**
   * When the user executes this callback
   * the animation is stopped.
   */
  const textAnimationKiller = () => {
    if (textAnimationTimeout.current != null) {
      clearInterval(textAnimationTimeout.current);
      textAnimationTimeout.current = null;
    }
  }

  /**
   * When the user executes this callback
   * it first checks if there is an active
   * animation in whose case, kills the previous one.
   */
  const textAnimationPlayer = useMemo(() => {
    return () => {
      /**
       * FIXME:
       * When the animation is stopped
       * the text state contains the first character
       * of the text. However the remaining string
       * calculation fails because that new value
       * is not available until the next render.
       */
      if (textAnimationTimeout.current == null) {
        const animation = textPushAnimation(textState, textDispatch, target, duration);
        if (animation != null)
          textAnimationTimeout.current = animation;
      }
    }
  }, [target, duration]);

  return [textState, textAnimationPlayer, textAnimationKiller] as const;
}


