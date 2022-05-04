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
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoginWithGoogle = async () => {
    await signInWithGoogle();
  };

  const handleLoginWithFacebook = async () => {
    await signInWithFacebook();
  };

  const handleLoginWithEmail = async () => {
    await singIn(email, password, () => null);
  };

  const handleEmail = () => setEmail(email);
  const handlePassword = () => setPassword(password);

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
