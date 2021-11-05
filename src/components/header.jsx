import '../styles/header.css'

function Header() {
  return (
    <div className="header_main">

      <div className='header_top'>
        <p>Dazed</p>
        <p>Dispensaries</p>
        <p>Deals</p>
        <p>Strains</p>
        <p>Priduct</p>
        <button>Login</button>
      </div>

      <div className='header_slogan'>
        <p>Find weed, get dazed, today</p>
      </div>

      <div className='header_search'>
        <input className='header_search_input' placeholder='Search despensaries, products,strains and more' type="search"></input>
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;