// import { AiOutlineCheck } from "react-icons/ai"
import '../styles/localStoreStyles.css'

function LocalStore () {

  return(
    <div className='localStore_main'>
      <div className="grid">
        <div className='localStore_header'>
          <div className="title">
            <h2 class="section_title">Your local dispensaried</h2>
            <p>We have found some dispensaries near you worth checking out. Don't forget to use code "dazed" at checkout.</p>
          </div>
          <div className="quick_link">
            <p>View All</p>
            <img src="/img/arrows.svg" alt="" />
          </div>
        </div>

        <div className='localStore_card'>
            <div className="card_top">
              <p className='tag'>REC</p>
              <div className="dispo_img"></div>
            </div>

            <div className="card_info">
              <div className="title">
                <h2>Native Roots</h2>
                <div className="rating">
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star_border.svg" alt="" />
                  <p className="numbers">(24)</p>
                </div>
                <div className="info">
                  <div className="item">
                    <p className="value">200 +</p>
                    <p className="title">Products</p>
                  </div>
                  <div className="item">
                    <p className="value">10 PM</p>
                    <p className="title">Store Hours</p>
                  </div>
                  <div className="item">
                    <p className="value">2.6</p>
                    <p className="title">Miles Away</p>
                  </div>
                </div>
              </div>
            </div>

        </div>

        <div className='localStore_card'>
            <div className="card_top">
              <p className='tag'>REC</p>
              <div className="dispo_img"></div>
            </div>

            <div className="card_info">
              <div className="title">
                <h2>Native Roots</h2>
                <div className="rating">
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star_border.svg" alt="" />
                  <p className="numbers">(24)</p>
                </div>
                <div className="info">
                  <div className="item">
                    <p className="value">200 +</p>
                    <p className="title">Products</p>
                  </div>
                  <div className="item">
                    <p className="value">10 PM</p>
                    <p className="title">Store Hours</p>
                  </div>
                  <div className="item">
                    <p className="value">2.6</p>
                    <p className="title">Miles Away</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        <div className='localStore_card'>
            <div className="card_top">
              <p className='tag'>REC</p>
              <div className="dispo_img"></div>
            </div>

            <div className="card_info">
              <div className="title">
                <h2>Native Roots</h2>
                <div className="rating">
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star-fill.svg" alt="" />
                  <img src="/img/star_border.svg" alt="" />
                  <p className="numbers">(24)</p>
                </div>
                <div className="info">
                  <div className="item">
                    <p className="value">200 +</p>
                    <p className="title">Products</p>
                  </div>
                  <div className="item">
                    <p className="value">10 PM</p>
                    <p className="title">Store Hours</p>
                  </div>
                  <div className="item">
                    <p className="value">2.6</p>
                    <p className="title">Miles Away</p>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default LocalStore