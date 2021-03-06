import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="pa2 input-reset ba  bg-transparent hover-bg-light-red hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              
              
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-light-red grow pointer f6 dib" type="submit" value="Sign in"/>
            </div>
            <div className="lh-copy mt3">
              <a href="#0" className="f6 link dim black db">Register</a>
            </div>
          </form>
        </main>
      </article>
      
    );
}

export default SignIn;