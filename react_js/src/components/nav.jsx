import './nav.css';
const Nav = () => {
    return (
        <nav>
           <div>
              <h2>Go Repair</h2> 
           </div>  
           <div>
                <button className='L_button'>Log In</button>
                <button className='S_button'>Sign Up</button>
            </div>
       </nav>
    );
}

export  default Nav;