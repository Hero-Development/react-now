
import React from "react";

import Debug from "../lib/debug";


type FormData = {
  name: string;
  email: string;
  phone: string;
};

let renderCount = 0;
const ProfileV2 = (props: any) => {
  const [formData, setFormData] = Debug.useState<FormData>({
    name: '',
    email: '',
    phone: ''
  }, 'Form Data');

  // const [name, setName] = React.useState<string>();
  // const [email, setEmail] = React.useState<string>();
  // const [phone, setPhone] = React.useState<string>();

  // const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(evt.target.value);
  // };

  // const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(evt.target.value);
  // };

  // const handlePhoneChange: React.ChangeEventHandler<HTMLInputElement> = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   setPhone(evt.target.value);
  // };

  const handleForm: React.FormEventHandler<HTMLFormElement> = (evt: React.FormEvent<HTMLFormElement>) => {
    if(evt?.cancelable)
      evt.preventDefault();

    const newData: FormData = {
      name: '',
      email: '',
      phone: ''
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
  console.log(`Profile render count: ${renderCount}`);
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
