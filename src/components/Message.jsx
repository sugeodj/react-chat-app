

const Message = () => {
  return (
      <div className='message owner'>
          <div className='messageInfo'>
              <img
                  src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt='pfp'
              />
              <span>just now</span>
          </div>
          <div className='messageContent'>
            <p>hey wyd?</p>
          </div>
      </div>
  );
}

export default Message