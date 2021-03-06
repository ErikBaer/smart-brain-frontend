import React from 'react';
import './SignIn.css';

const SignIn = ({onRouteChange}) => {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="email pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Password</label>
                <input className="email pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Password"  id="password"/>
              </div> 
            </fieldset>
            <div>
              <input 
              onClick={() => onRouteChange('home')}
              className="b ph3 pv2 input-reset ba b--black bg-light-red grow pointer f6 dib" type="submit" value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
              <p onCLick={onRouteChange('register')} className="f6 link dim black db">Register</p>
            </div>
          </form>
        </main>
      </article>
      
    );
}

export default SignIn;