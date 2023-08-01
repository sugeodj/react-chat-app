import React from 'react'

const Search = () => {
  return (
      <div className='search'>
          <div className='searchForm'>
              <input type='text' placeholder='Find a user...' />
          </div>
          <div className='userChat'>
              <img
                  src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt='pfp'
              />
              <div className='userChatInfo'>
                  <span>Jane</span>
              </div>
          </div>
      </div>
  );
}

export default Search