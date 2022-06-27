/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
  singIn,
  signInWithGoogle,
  signInWithFacebook,
} from 'services/FirebaseOAuth';

export const LoginController = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginWithGoogle = async () => {
    await signInWithGoogle();
  };

  const handleLoginWithFacebook = async () => {
    await signInWithFacebook();
  };

  const handleLoginWithEmail = async () => {
    await singIn(email, password);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return {
    state: {
      email,
      password,
    },
    actions: {
      handleEmail,
      handlePassword,
      handleLoginWithGoogle,
      handleLoginWithFacebook,
      handleLoginWithEmail,
    },
  };
};
