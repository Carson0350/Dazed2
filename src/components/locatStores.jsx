// import { AiOutlineCheck } from "react-icons/ai"
import '../styles/localStoreStyles.css'

function LocalStore () {

  return(
    <div className='localStore_main'>
      <div className='localStore_header'>
        <div className='localStore_intro'>
          <h1>Your local dispensaried</h1>
          <p>Order Online, Pickup in-stores, Have your high delivered, get dazed</p>
        </div>

        <div>
          <p>View All <span>>></span></p>
        </div>
      </div>

          <div className='localStore_card_1'>
            <p>REC</p>
            <p>This will be an image</p>

            <div>
              <p className='desp_name'>Native Roots</p>
              <p className='star_rating'></p>
              <p className='review_number'>(44)</p>
            </div>

            <div>
              <p>200+</p>
              <p>Products</p>

              <p>9am - 10pm</p>
              <p>Store Hours</p>

              <p>2.6</p>
              <p>Miles Away</p>
            </div>
        </div>


        <div className='localStore_card_2'>
          <div>
            <p>REC</p>
            <p>This will be an image</p>
          </div>

          <div>
            <p className='desp_name'>Black Cap</p>
            <p className='star_rating'></p>
            <p className='review_number'>(31)</p>
          </div>

          <div>
            <p>175+</p>
            <p>Products</p>

            <p>9am - 10pm</p>
            <p>Store Hours</p>

            <p>6</p>
            <p>Miles Away</p>
          </div>
        </div>


        <div className='localStore_card_3'>
          <div>
            <p>REC</p>
            <p>This will be an image</p>
          </div>

          <div>
            <p className='desp_name'>Shine Cannabis</p>
            <p className='star_rating'></p>
            <p className='review_number'>(24)</p>
          </div>

          <div>
            <p>200+</p>
            <p>Products</p>

            <p>9am - 10pm</p>
            <p>Store Hours</p>

            <p>2.6</p>
            <p>Miles Away</p>
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