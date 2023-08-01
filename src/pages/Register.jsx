

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
                  <input type='file' />
                  <button></button>
              </form>
          </div>
      </div>
  );
}

export default Register