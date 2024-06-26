import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div class = "wrapper"> 
        <form action="">
          <h1> SignUp </h1> 
          <div class = "input-box">
            <input type ="email" placeholder = "Email" required>
            </input>
            <i class='bx bx-envelope'></i>
          </div>
          <div class = "input-box">
            <input type ="password" placeholder = "Password" required>
            </input>
            <i class='bx bx-lock-alt'></i>
          </div>
          <div class = "input-box">
            <input type ="password" placeholder = "Confirm Password" required>
            </input>
            <i class='bx bx-lock'></i>

          </div>

          <div class= "remember-forgot">
            <label>
              <p><input type = "checkbox"></input> Remember Me </p>
            </label> 
          </div>

          <div className ="create account">
            <button >
              Create Account 
            </button>
            <p> Already Have an Account <a href= "#"> Login </a> </p>

          </div>


        </form>

      
      
      </div>



      
      
      
      </>
      

    
    
  )
}

export default App
