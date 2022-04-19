import { FormEvent, useState } from 'react';
import {
  singIn,
  singOut,
  signInWithGoogle,
  signInWithFacebook,
} from 'services/firebase';

export const LoginController = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoginWithGoogle = async () => {
    const res = await signInWithGoogle();
    return console.log(res);
  };

  const handleLoginWithFacebook = async () => {
    const res = await signInWithFacebook();
    return console.log(res);
  };

  const handleLoginWithEmail = async () => {
    await singIn(email, password, () => console.log('erro'));
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
