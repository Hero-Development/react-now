
import React, {useContext} from "react";

import Debug from "../context/debug";


type FormData = {
  name: string;
  email: string;
  phone: string;
};

let renderCount = 0;
const ProfileV3 = (props: any) => {
  const debug = useContext(Debug.Context);

  const [formData, setFormData] = debug.useState<FormData>({
    name: '',
    email: '',
    phone: ''
  }, 'Debug: Form Data');

  const handleForm: React.FormEventHandler<HTMLFormElement> = (evt: React.FormEvent<HTMLFormElement>) => {
    if(evt?.cancelable)
      evt.preventDefault();

    const newData: FormData = {
      ...formData
    };

    const form = evt.target as HTMLFormElement;
    for(let i = 0; i < form.length; ++i){
      const input = form[i] as HTMLInputElement;
      //console.log([ input.type, input.name, input.value ]);
      if(input.type === 'text'){
        switch(input.name){
          case 'name':
          case 'email':
          case 'phone':
            newData[input.name] = input.value;
            break;
        }
      }
    }

    setFormData(newData);
  };

  renderCount++;
  console.log(`ProfileV3 render count: ${renderCount}`);
  return (
    <>
    <form onSubmit={handleForm}>
      <label>Name:</label> <input type="text" name="name" defaultValue={formData.name} /><br />
      <label>Email:</label> <input type="text" name="email" defaultValue={formData.email} /><br />
      <label>Phone:</label> <input type="text" name="phone" defaultValue={formData.phone} /><br />
      <input type="submit" value="Update" />
    </form>
    <hr />
    <div>
      <pre>{JSON.stringify({
        mode: debug.mode,
        state: debug.state,
        taskCount: debug.taskCount
      }, null, 2)}</pre>
    </div>
    </>
  );
};

export default ProfileV3;
