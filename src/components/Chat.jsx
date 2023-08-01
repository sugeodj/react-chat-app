import Cam from '../imgs/cam.png'
import Add from '../imgs/add.png'
import More from '../imgs/more.png'
import Messages from './Messages';
import Input from './Input';


const Chat = () => {
  return (
      <div className='chat'>
          <div className='chatInfo'>
              <span>Jane</span>
              <div className='chatIcons'>
                  <img src={Cam} alt='cam' />
                  <img src={Add} alt='add' />
                  <img src={More} alt='more' />
              </div>
          </div>
          <Messages />
          <Input />
      </div>
  );
}

export default Chat