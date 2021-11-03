import '../styles/header.css'

function Header() {
  return (
    <div className="Header">
      <div>
        <header className="App-header">
          <div>
            <p>Dazed</p>
          </div>
          <div>
            <p>Dispensaries</p>
            <p>Deals</p>
            <p>Strains</p>
            <p>Priduct</p>
          </div>
        </header>
      </div>


      <div>
        <button>Login</button>
      </div>

      <div>
        <p>Find weed, get dazed, today</p>
      </div>
      <div>
        {/* <label for="site-search">Search the site:</label> */}
        <input placeholder='Search despensaries, products,strains and more' type="search" id="site-search"></input>
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header;