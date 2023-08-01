const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Sugeodj Chat</span>
                <span className='title'>Login</span>
                <form>
                    <input type='text' placeholder='Username...' />
                    <input type='email' placeholder='example@email.com' />
                    <input type='password' placeholder='********' />
                    <button>Sign in</button>
                </form>
                <p>You don`t have an account? Register</p>
            </div>
        </div>
    );
};

export default Login;
