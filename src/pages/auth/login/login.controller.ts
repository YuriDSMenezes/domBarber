/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import {
  singIn,
  signInWithGoogle,
  signInWithFacebook,
} from 'services/FirebaseOAuth';

export const LoginController = () => {
  const [email, setEmail] = useState<string>('asd');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoginWithGoogle = async () => {
    await signInWithGoogle();
  };

  const handleLoginWithFacebook = async () => {
    await signInWithFacebook();
  };

  const handleLoginWithEmail = async () => {
    await singIn(email, password);
  };

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  return {
    state: {
      email,
      password,
      error,
      loading,
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
