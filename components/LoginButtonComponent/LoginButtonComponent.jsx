import React from 'react';
import styles from './LoginButtonComponent.module.css';
import { useRouter } from 'next/router'

const LoginButtonComponent = ({}) => {
  const router = useRouter();
  const authenticateUserCall = async () => {
   try {
      const response = await fetch('/api/submitLogin');
      console.log(response);
      // if (response === 'ok') {
        router.push('/shop');
      // }
    }
    catch (err) {

    }
  }
  return (
  <div className={styles.buttonContainer}>
    <button 
     className={styles.buttonClass}
     tabIndex={3} 
     onClick={authenticateUserCall}>
       Login
     </button>
  </div>
  );
}

export default LoginButtonComponent;