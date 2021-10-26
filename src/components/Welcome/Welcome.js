import { useState } from 'react';
import './Welcome.css';

function Welcome() {
  
  const [welcomeText, setWelcomeText] = useState('Welcome to GoCode Shop');

  const toggleText = () => {
    welcomeText ? setWelcomeText('') : setWelcomeText('Welcome to GoCode Shop');
  }

  return (
    <div className="welcome">
      <button onClick={ toggleText }>Delete welcome Msg</button>
      <h2>{ welcomeText }</h2>
    </div>
  );
}

export default Welcome;