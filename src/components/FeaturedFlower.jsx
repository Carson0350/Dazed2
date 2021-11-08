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
        <div className='flower_card'>
            <img src="img/weed-1.png" alt=""/>
            <div className="content">
              <p>Afghan Kush</p>
              <div className="label _indica">Indica</div>
            </div>
        </div>

        <div className='flower_card'>
            <img src="img/weed-2.png" alt=""/>
            <div className="content">
              <p>Blackberry Kush</p>
              <div className="label _indica">Indica</div>
            </div>
        </div>

        <div className='flower_card'>
            <img src="img/weed-3.png" alt=""/>
            <div className="content">
              <p>Sour Diesel</p>
              <div className="label _sativa">Indica</div>
            </div>
        </div>

        <div className='flower_card'>
            <img src="img/weed-4.png" alt=""/>
            <div className="content">
              <p>Pink Kush</p>
              <div className="label _hybrid">Hybrid</div>
            </div>
        </div>

        {/* row 2 */}
        <div className='flower_card'>
            <img src="img/weed-5.png" alt=""/>
            <div className="content">
              <p>Apple Fritter</p>
              <div className="label _hybrid">Hybrid</div>
            </div>
        </div>

        <div className='flower_card'>
            <img src="img/weed-6.png" alt=""/>
            <div className="content">
              <p>Durban Poison</p>
              <div className="label _sativa">Sativa</div>
            </div>
        </div>

        <div className='flower_card'>
            <img src="img/weed-7.png" alt=""/>
            <div className="content">
              <p>Jesus Beard</p>
              <div className="label _indica">Indica</div>
            </div>
        </div>

        <div className='flower_card'>
            <img src="img/weed-8.png" alt=""/>
            <div className="content">
              <p>Pineaple Express</p>
              <div className="label _sativa">Sativa</div>
            </div>
        </div>

        <img src="img/bg-nug.png" alt="" className="bg-nug"/>

      </div>
    </div>
  )
}

export default FeaturedFlower