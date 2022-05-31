import react from 'react';
import styles from './PasswordFieldComponent.module.css';

const PasswordFieldComponent = ({ passwordValue, setPasswordValue }) => (
  <div className={styles.passwordContainer}>
    <input 
      type="password" 
      name="Password" 
      tabIndex="2"
      value={passwordValue} 
      onChange={setPasswordValue}
      placeholder='Password'/>
  </div>
);


export default PasswordFieldComponent;