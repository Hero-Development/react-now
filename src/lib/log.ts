
import React from "react";

import { UseStateOutput, UseStateInput } from "../types";

let stateId = 1;
const useState = <T>(defaultVal: T): UseStateOutput<T> => {
  const [curVal, setVal] = React.useState(defaultVal);

  //let myStateId = name ? name : stateId++;
  let myStateId = stateId++;
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

const Log = {
  useState
};

export default Log;
