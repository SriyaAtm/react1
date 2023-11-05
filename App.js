//import logo from './logo.svg';
import './App.css';
//import Loading from './useState/loading';
import { Routes,Route } from 'react-router-dom';
/* import Home from './components/Home';
import About from './components/About'; */
import Abbot from './cc/Abbot';
import Pricing from './cc/Pricing';
import Home from './cc/Home';

/*
function App() {
  return (
    
      <div className="logo-box">
          <img src="./twitter.png" alt="logo" className='tlogo'/>
          <h2>Sign In to Twitter</h2>
          <button>
            <img src="./google.png" alt="logo"/>
            Sign In with Google
          </button>
          <button>
            <img src="./apple.png" alt="logo"/>
            Sign In with Apple ID
          </button>  
          <hr></hr>
          <span>Or</span>
          <form>
          <input type="text" placeholder='Phone,email address or username'/>
          
          <button>Next</button>
          </form>
          <button>Forgot Password?</button>
          <p>Don't have an account?<a>Sign up</a></p>

             

      </div>
      
    
  );
}

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src="./google.png" alt="Google" className="google-logo" />
        </div>
        <div className='header2'>
        <h2>Sign in</h2>
        <h3>Use your google account</h3>
        </div>
      
      
      <div className="content">
    
        <form>
          <div className='text'>
          <input type="text" placeholder="Email or phone" />
          <p>Forgot email?</p>
        </div>
      
        </form>

          <div className="bottom-link">
            <p>Not your computer? Use Guest mode to sign in privately.</p>
            
            <a>Learn more</a><br></br>
            </div> 
            
            
          Create account
        <div className='butt'>
          <a href="https://www.youtube.com">
          <button>Next</button>
          </a>
          </div>
          

      </div>
      
    </div>

);}
*/

function App(){
  return(
    <div className="title">
            <nav>Site Title</nav>

            
  
    

  <Routes>
   <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<Abbot/>}/>
  
  <Route path='/pricing' element={<Pricing/>}/>
    </Routes>
  

    </div>
  )
}

export default App;
