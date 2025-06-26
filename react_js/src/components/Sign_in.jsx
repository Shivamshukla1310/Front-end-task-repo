import './signIn.css';
import {Link} from 'react-router-dom';

const Sign = () => {
 return (
    <div className='main'>
    <div className="container">
      <h2 id="sign_h2">Sign In for Home Servies</h2>
      <div className="info">
      <label For="name">Name </label> <br />
      <input type="text" placeholder="Enter name"/> <br />
      <label For="name">Email </label> <br />
      <input type="text" placeholder="Enter Email"/> <br />
      <label For="name">Password </label> <br />
      <input type="text" placeholder="Create Password"/> <br />
      <label For="name">Confirm Password </label> <br />
      <input type="text" placeholder="Confirm Password"/>
      </div> 
      <pre></pre>
      <button>Sign in</button> 
      <pre></pre>
      <Link to="/login">already have an account? log in</Link>
    </div>
    </div>
    )
}
 export default Sign;