


type StateSetter<T> = (curVal: T) => T;
type StateValue<T> = T;
export type UseStateInput<T> = StateValue<T> | StateSetter<T>;
export type UseStateSetter<T> = (cbOrVal: UseStateInput<T>) => void;
export type UseStateOutput<T> = [T, UseStateSetter<T>];
export type UseState<T> = (defaultVal: T, name?: string) => UseStateOutput<T>;

export type UseDebugInput = unknown;
export type UseDebugOutput = {
  useState: UseState<T>
};
