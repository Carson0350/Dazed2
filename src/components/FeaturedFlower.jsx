import '../styles/featuredFlowerStyles.css'

function FeaturedFlower () {
  return (
    <div className='featuredFlower'>
      <div className="grid">

        <div className='featuredFlower_header'>
          <div className="title">
            <h2 class="section_title">Featured flowers you can buy today.</h2>
            <p>We have found some dispensaries near you worth checking out. Don't forget to use code "dazed" at checkout.</p>
          </div>

          <div className="quick_link">
            <p>View All</p>
            <img src="/img/arrows.svg" alt="" />
          </div>

        </div>
      </div>

      <div className="grid">

        <div className='flower_card'>
          <img src="img/weed-1.png" alt=""/>
          <p>Afghan Kush</p>
          <button>Indica</button>
        </div>

      </div>
    </div>
  )
}

export default FeaturedFlower