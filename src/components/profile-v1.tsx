
import React from "react";

import Log from "../lib/log";

let renderCount = 0;
const ProfileV1 = (props: any) => {
  const [name, setName] = Log.useState<string>('');
  const [email, setEmail] = React.useState<string>();
  const [phone, setPhone] = React.useState<string>();

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const handlePhoneChange: React.ChangeEventHandler<HTMLInputElement> = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(evt.target.value);
  };

  const handleVoid: React.FormEventHandler<HTMLFormElement> = (evt: React.FormEvent<HTMLFormElement>) => {
    // no-op
  };

  renderCount++;
  console.log(`---ProfileV1 render count: ${renderCount}---`);
  return (
    <form onSubmit={handleVoid}>
      <label>Name:</label> <input type="text" name="name" value={name} onChange={handleNameChange} /><br />
      <label>Email:</label> <input type="text" name="email" value={email} onChange={handleEmailChange} /><br />
      <label>Phone:</label> <input type="text" name="phone" value={phone} onChange={handlePhoneChange} /><br />      
    </form>
  );
};

export default ProfileV1;
