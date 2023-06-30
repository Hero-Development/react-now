
export enum DebugMode {
  NEXT = 'NEXT',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE'
};

type StateValue<T> = T;
type StateSetter<T> = (curVal: T) => T;
export type UseStateInput<T> = StateValue<T> | StateSetter<T>;
export type UseStateSetter<T> = (cbOrVal: UseStateInput<T>) => void;
export type UseStateOutput<T> = [T, UseStateSetter<T>];
export type UseState<T> = (defaultVal: T, name?: string) => UseStateOutput<T>;

//export type UseDebugInput = unknown;
export type UseDebugOutput = {
  handleNext: () => void;
  handlePlay: () => void;
  handleStop: () => void;
  useState: <T>(defaultVal: T, name: string) => UseStateOutput<T>;

  mode: DebugMode;
  state: unknown;
  taskCount: number;
};
