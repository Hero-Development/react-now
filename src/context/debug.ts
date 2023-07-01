
import React from 'react';
import {
  DebugMode,
  UseStateOutput,
  UseStateInput,
  UseDebugOutput,
} from '../types';

type Task = () => void;

export const DebugContext = React.createContext<UseDebugOutput>(undefined as any);

const useDebug = (): UseDebugOutput => {
  const [mode, setMode] = React.useState<DebugMode>(DebugMode.PAUSE);
  const [state, setState] = React.useState<unknown>({});
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const handleNext = () => {
    console.log( `handleNext: ${tasks.length}` );

    if(tasks?.length){
      tasks[0]();
      setTasks(tasks.slice(1));
    }
  };

  const handlePlay = () => {
    console.log( `handlePlay: ${tasks.length}` );

    if(tasks?.length){
      for(let i = 0; i < tasks.length; ++i){
        tasks[i]();
      }
      setTasks([]);
    }
  };

  const handleStop = () => {
    console.log( 'handleStop' );
  };

  const useState = <T>(defaultVal: T, name: string): UseStateOutput<T> => {
    const [curVal, setVal] = React.useState(defaultVal);
  
    //let myStateId = name ? name : stateId++;
    const setter = (cbOrVal: UseStateInput<T>) => {
      console.log(`Queue state[${name}]...`);
  
      setTasks((curTasks) => {
        const addTask = () => {
          let nextVal: T;
          if(typeof cbOrVal === 'function')
            nextVal = (cbOrVal as any)(curVal);
          else
            nextVal = cbOrVal;
    
          console.log(`...update state[${name}] = `+ JSON.stringify(nextVal));
          setVal(nextVal);
          setState((curState: T) => {
            return {
              ...curState,
              [name]: nextVal
            }
          });
        };

        return [...curTasks, addTask];
      });
    };
  
    return [curVal, setter];
  };

  const output = {
    handleNext,
    handlePlay,
    handleStop,
    useState,

    mode,
    state,
    taskCount: tasks.length,
  };

  return output;
};

const Debug = {
  Context: DebugContext,
  useDebug
};

export default Debug;
