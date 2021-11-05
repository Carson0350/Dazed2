import '../styles/dazedDealsStyles.css'


function DazedDeals() {
  return (
    <div className='dazed_deals'>
      <div className="grid">
        <div className="info">
          <div className="wrapper">
            <p className="highlight">80 + Deals</p>
            <h2 className="section_title">Explore dazed's exclusive deals in your location</h2>
            <button>view Deals</button>
          </div>
        </div>
        <div className="img">
          <img className="blue-logo" src="img/blue-logo-outline.svg" alt="" />
          <img className="z-fill" src="img/z-fill.svg" alt="" />
          <img className="product" src="/img/products-deal.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default DazedDeals