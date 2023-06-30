
import React from 'react';
import {
  UseStateOutput,
  UseStateInput,
  UseDebugInput,
  UseDebugOutput
} from '../types';

export const DebugContext = React.createContext<unknown>(null);

let stateId = 1;
const useDebug = (defaultVal: UseDebugInput): UseDebugOutput => {


  const useState = <T>(defaultVal: T, name?: string): UseStateOutput<T> => {
    const [curVal, setVal] = React.useState(defaultVal);
  
    let myStateId = name ? name : stateId++;
    const setter = (cbOrVal: UseStateInput<T>) => {
      console.log(`Queue state[${myStateId}]...`);
  
      setVal(() => {
        let nextVal: T;
        if(typeof cbOrVal === 'function')
          nextVal = (cbOrVal as any)(curVal);
        else
          nextVal = cbOrVal;
  
        console.log(`...update state[${myStateId}] = `+ JSON.stringify(nextVal));
        return nextVal;
      });
    };
  
    return [curVal, setter];
  };

  const tools = {
    useState
  };
  return tools;
};

export default {
  Consumer: DebugContext.Consumer,
  Provider: DebugContext.Provider,
  displayName: DebugContext.displayName,
  useDebug
};
