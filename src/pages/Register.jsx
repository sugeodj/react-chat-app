

const Register = () => {
  return (
      <div className='formContainer'>
          <div className='formWrapper'>
            <span className="logo">Sugeodj Chat</span>
            <span className="title">Register</span>
              <form>
                  <input type='text' placeholder='Username...' />
                  <input type='email' placeholder='example@email.com' />
                  <input type='password' placeholder='********' />
                  <input hidden type='file' id="file"/>
                  <label htmlFor="file">
                    <img src="" alt="" />
                  </label>
                  <button>Sign up</button>
              </form>
              <p>You do have an account? Login</p>
          </div>
      </div>
  );
}

export default Register