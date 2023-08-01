

const Navbar = () => {
  return (
      <div className='navbar'>
          <span className='logo'>Sugeodj Chat</span>
          <div className='user'>
              <img
                  src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4='
                  alt='pfp'
              />
              <span>John</span>
              <button>logout</button>
          </div>
      </div>
  );
}

export default Navbar