import react, { useState } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import UsernameFieldComponent from '../components/UsernameFieldComponent/UsernameFieldComponent';
import PasswordFieldComponent from '../components/PasswordFieldComponent/PasswordFieldComponent';
import LoginButtonComponent from '../components/LoginButtonComponent/LoginButtonComponent';
export default function Login({}) {
  const [userNameValue, setUserNameValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  return (
  <div className={styles.mainContainer}>
    <h1>Welcome To Liron's Store</h1>
    <Image src="/store.svg" alt="store icon" height={100} width={100} />
    <div>
      <UsernameFieldComponent userNameValue={userNameValue} setUserNameValue={setUserNameValue} />
      <PasswordFieldComponent passwordValue={passwordValue} setPasswordValue={setPasswordValue}  />
      <LoginButtonComponent userName={userNameValue} password={passwordValue} />
    </div>
  </div>
  )
};
