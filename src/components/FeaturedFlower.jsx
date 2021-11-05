import '../styles/featuredFlowerStyles.css'

function FeaturedFlower () {
  return (
    <div className='featuredFlower'>
      <div>
        <p>View All <span>>></span></p>
      </div>

      <div className='flower_intro'>
        <h1>Featured flower you can buy today.</h1>
        <p>Order Online, Pickup in-stores, Have your high delivered, get dazed today.</p>
      </div>

      <div className='flower_1'>
          <div>
            <p>IMG</p>
            <p>Afghan Kush</p>
          </div>

          <div>
            <p>IMG</p>
            <p>Blackberry Kush</p>
          </div>

          <div>
            <p>IMG</p>
            <p>Sour Diesel</p>
          </div>

          <div>
            <p>IMG</p>
            <p>Skittlez</p>
          </div>
      </div>

      <div className='flower_2'>
          <div>
            <p>IMG</p>
            <p>Jesus Beard</p>
          </div>

          <div>
            <p>IMG</p>
            <p>Durban Poison</p>
          </div>

          <div>
            <p>IMG</p>
            <p>Pineapple Express</p>
          </div>

          <div>
            <p>IMG</p>
            <p>Girlscout cookies</p>
          </div>
        </div>
      </div>
  )
}

export default FeaturedFlower