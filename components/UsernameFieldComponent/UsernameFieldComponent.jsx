import react from 'react';
import styles from './UsernameFieldComponent.module.css';
const UsernameFieldComponent = ({ userNameValue, setUserName }) => (
  <div className={styles.userNameContainer}>
    <input 
      value={userNameValue}
      onChange={setUserName}
      type="text" 
      name="Username" 
      tabIndex="1" 
      placeholder='Username' />
  </div>
);


export default UsernameFieldComponent;