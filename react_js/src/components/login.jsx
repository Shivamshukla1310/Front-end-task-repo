import "./signIn.css"
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className="main">
        <div className="container">
            <h2 id="log_h2">Welcome back</h2>
            <div className="info">
                <label>username or Email</label> <br />
                <input type="text" placeholder="Enter username or mail"/> <br />
                <label>username or Email</label> <br />
                <input type="text" placeholder="Enter username or mail"/> <br />
                <a href="" id="forgot">Forgot password?</a>
            </div>
            <button>Login</button>
            <pre></pre>
            <Link to="/signup">Dont have an account? Sign up </Link>
        </div>
       </div>
    )
}

export default Login;