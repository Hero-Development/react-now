
import React from "react";

import Log from "../lib/log";


type FormData = {
  name: string;
  email: string;
  phone: string;
};

let renderCount = 0;
const ProfileV2 = (props: any) => {
  const [formData, setFormData] = Log.useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });

  const handleForm: React.FormEventHandler<HTMLFormElement> = (evt: React.FormEvent<HTMLFormElement>) => {
    if(evt?.cancelable)
      evt.preventDefault();

    // bad example
    const newData: FormData = formData;

    // good example
    // const newData: FormData = {
    //   ...formData
    // };

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
            setFormData(newData);
            break;
        }
      }
    }
  };

  renderCount++;
  console.log(`ProfileV2 render count: ${renderCount}`);
  return (
    <form onSubmit={handleForm}>
      <label>Name:</label> <input type="text" name="name" defaultValue={formData.name} /><br />
      <label>Email:</label> <input type="text" name="email" defaultValue={formData.email} /><br />
      <label>Phone:</label> <input type="text" name="phone" defaultValue={formData.phone} /><br />
      <input type="submit" value="Update" />
    </form>
  );
};

export default ProfileV2;
