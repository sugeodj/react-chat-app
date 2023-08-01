import React from 'react'

const Conversations = () => {
  return (
      <div className='conversations'>
          <div className='userChat'>
              <img
                  src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt='pfp'
              />
              <div className='userChatInfo'>
                  <span>Jane</span>
                  <p>Hello</p>
              </div>
          </div>
          <div className='userChat'>
              <img
                  src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt='pfp'
              />
              <div className='userChatInfo'>
                  <span>Jane</span>
                  <p>Hello</p>
              </div>
          </div>
          <div className='userChat'>
              <img
                  src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt='pfp'
              />
              <div className='userChatInfo'>
                  <span>Jane</span>
                  <p>Hello</p>
              </div>
          </div>
      </div>
  );
}

export default Conversations