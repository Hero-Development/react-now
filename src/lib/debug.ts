
import React from "react";

type StateValue<T> = T;
type StateSetter<T> = (curVal: T) => T;
type SetterArg<T> = StateValue<T> | StateSetter<T>;
type Setter<T> = (cbOrVal: SetterArg<T>) => void;

type ReturnType<T> = [T, Setter<T>];

let stateId = 1;
function useState<T>(nextVal: T, name?: string): ReturnType<T> {
  const [curVal, setVal] = React.useState(nextVal);

  // enclosure variables
  //let curVal = nextVal;
  let myStateId = name ? name : stateId++;
  const setter = (cbOrVal: SetterArg<T>) => {
    console.log(`Queue state[${myStateId}]...`);

    setVal(() => {
    //setTimeout(() => {
      let nextVal: T;
      if(typeof cbOrVal === 'function')
        nextVal = (cbOrVal as any)(curVal);
      else
        nextVal = cbOrVal;

      console.log(`Update state[${myStateId}] = `+ JSON.stringify(nextVal));
      return nextVal;
    });
  };

  return [curVal, setter];
};

/*
const useState<T> = (nextVal: T): ReturnType<T> => {
  let curVal = nextVal;

  const setter<T2> = (cbOrVal: Setter<T>) => {
    setTimeout(() => {
      if(typeof cbOrVal === 'function')
        curVal = cbOrVal(curVal);
      else
        curVal = cbOrVal;
    }, 0);
  };

  return [nextVal, setter];
};
*/

export default {
  useState
};
