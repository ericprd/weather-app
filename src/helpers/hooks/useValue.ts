import { ChangeEvent, useState } from "react";

export type UseValueProps<T> = Parameters<typeof useValue<T>>

const useValue = <T>(init: T) => {
  const [state, setState] = useState<T>(init);

  const change = (e: ChangeEvent<HTMLInputElement> | T) => {
    if (typeof e === 'object' && 'target' in e!) {
      setState(e.target.value as T)
    } else {
      setState(e);
    }
  };

  return { state, change };
};

export default useValue;
