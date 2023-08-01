import Img from '../imgs/img.png'
import Attach from '../imgs/attach.png'

const Input = () => {
  return (
      <div className='input'>
          <input type='text' placeholder='Type something...' />
          <div className='send'>
              <img src={Attach} alt='attach' />
              <input hidden type='file' id='file' />
              <label htmlFor="file">
                <img src={Img} alt="img" />
              </label>
              <button>Send</button>
          </div>
      </div>
  );
}

export default Input