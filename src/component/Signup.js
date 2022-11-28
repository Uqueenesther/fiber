import React from "react";
import '../App.scss';

function Signup (){
    return(
        <div className="signup">
          <div className="form">
              
              <form action="#" className="form__container">

                <div className="form__heading">
                <h3 className="heading__3">Fiber</h3>
                <h1 className="heading__1">Create your Fiber account</h1>
                </div>
                <div className="form__group">
                  <label className="form__label">Your name</label>
                  <input type="text" className="form__input" placeholder="John Doe" required/>
                </div>

                <div className="form__group">   
                  <label className="form__label">E-mail</label>
                  <input type="email" className="form__input" placeholder="john@example.com" required/>
                </div>

                <div className="form__group">
                  <label className="form__label">Password</label> 
                
                <input type="password" className="form__input password" placeholder="at least 8 character" required/>   
                
                </div>

                <div className="checkbox">
                  <input type="checkbox" className="checkbox__input"/>
                  <label className="checkbox__label">By creating an account on fiber you agree to the <a href="http://localhost:3000/signup">Terms &amp; Condition</a></label>
                </div>

                  <button className="btn acct-btn" type="submit">Create Fiber account</button>
                  <p className="btn-P">Already have an account ? <a href="http://localhost:3000/signup">Sign in</a></p>
              </form>
          </div>

          <div  className="purple">
          <div className="purple__div">
            <img src="img/Signupimg.png" alt="signup" className="purple__img"/>
            <div className="purple__text">
            <h2 className="heading__2 purple__heading">Unparalleled Templates</h2>
            <p>Crafted by a team of professional designers,our templates are eunparalleled in the market. </p>
          
            </div>
          </div> 
         </div>

        </div>
    )
}

export default Signup;

