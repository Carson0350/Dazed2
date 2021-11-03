// import { AiOutlineCheck } from "react-icons/ai"
import '../styles/localStoreStyles.css'

function LocalStore () {

  return(
    <div>

      <div>
        <p>View All <span>>></span></p>
      </div>

      <div className='LocalStore'>
        <h1>Your local dispensaried</h1>
        <p>Order Online, Pickup in-stores, Have your high delivered, get dazed</p>
      </div>

      <div className='local_card'>
        <div>
          <p>REC</p>
          <p>This will be an image</p>
        </div>

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


      <div className='local_card'>
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


      <div className='local_card'>
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

    </div>
  )
}

export default LocalStore