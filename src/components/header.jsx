import '../styles/header.css'

function Header() {
  return (
    <div className="header_container">

      <div className='header_top'>
        <div className="links">
          <img src="/img/dazed-logo.svg" alt="dazedlogo" class="logo"/>
          <p>Dazed</p>
          <p>Dispensaries</p>
          <p>Deals</p>
          <p>Strains</p>
          <p>Priduct</p>
        </div>
        <button><img src="/img/account_circle.svg" alt="user icon" class="icon"/>Login</button>
      </div>

      <div className='header_slogan'>
        <h1>Welcome to Dazed, <br/> where buying weed is made simple.</h1>
      </div>

      <div className='header_search'>
        <img src="/img/search.svg" alt="search icon" class="logo" class="search"/>
        <input className='header_search_input' placeholder='Search despensaries, products,strains and more' type="search">
        </input>
        <button>Search</button>
      </div>

      <div className="header_bg-img"></div>
      <img src="/img/z.svg" alt="" class="z" />
    </div>
  );
}

export default Header;