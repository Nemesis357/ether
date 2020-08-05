import React from 'react';

const SignIn = (props) => {
    return (
        <div className="signInForm">
            <h3>Sign in form</h3>
            <form>
                <div>
                    <label for="username">User name:</label>
                    <input type="text" name="username" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="text" name="password" />
                </div>
                <button onClick="signInHandler">Sign in</button>
            </form>
        </div>
    )
}

export default SignIn;