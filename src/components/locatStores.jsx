// import { AiOutlineCheck } from "react-icons/ai"
import '../styles/localStoreStyles.css'

function LocalStore () {

  return(
    <div className='localStore_main'>
      <div className='localStore_header'>
          <h1>Your local dispensaried</h1>
          <p>Order Online, Pickup in-stores, Have your high delivered, get dazed</p>
            <p>View All <span>>></span></p>
      </div>

      <div className='card_container'>
          <div className='localStore_card'>
            <p className='tag'>REC</p>
            <img src="/img/header-img.png" alt="dazd" className="despoImg"/>

            <div>
              <p className='desp_name'>Native Roots</p>
              <p className='star_rating'></p>
              <p className='review_number'>(44)</p>
            </div>

            <div className='store_info'>
              <p>200+</p>
              <p>Products</p>

              <p>9am - 10pm</p>
              <p>Store Hours</p>

              <p>2.6</p>
              <p>Miles Away</p>
            </div>
          </div>

          <div className='localStore_card'>
          <div>
            <p className='tag'>REC</p>
            <img src="/img/header-img.png" alt="dazd" className="despoImg"/>
          </div>

          <div>
            <p className='desp_name'>Black Cap</p>
            <p className='star_rating'></p>
            <p className='review_number'>(31)</p>
          </div>

          <div className='store_info'>
            <p>175+</p>
            <p>Products</p>

            <p>9am - 10pm</p>
            <p>Store Hours</p>

            <p>6</p>
            <p>Miles Away</p>
          </div>
        </div>


        <div className='localStore_card'>
          <div>
            <p className='tag'>REC</p>
            <img src="/img/header-img.png" alt="dazd" className="despoImg"/>
          </div>

          <div>
            <p className='desp_name'>Shine Cannabis</p>
            <p className='star_rating'></p>
            <p className='review_number'>(24)</p>
          </div>

          <div className='store_info'>
            <p>200+</p>
            <p>Products</p>

            <p>9am - 10pm</p>
            <p>Store Hours</p>

            <p>2.6</p>
            <p>Miles Away</p>
          </div>
        </div>
      </div>

        <div className='localStore_deals'>
            <p>Explore exclusive dazed deals in your area!</p>
            <div className='button_primary'>View Deals</div>
            <div>
              <p>Another Image</p>
            </div>
        </div>

    </div>
  )
}

export default LocalStore