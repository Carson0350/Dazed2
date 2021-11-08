import '../styles/welcomeStyles.css'
import { Grid } from 'react-bootstrap-icons'

function Welcome() {
  return (
    <div className='welcome_main'>
      <grid className='grid'>
        
      <div className='welcome_header'>
          <div className="title">
            <h2 class="section_title">Featured flowers you can buy today.</h2>
            <p>We have found some dispensaries near you worth checking out. Don't forget to use code "dazed" at checkout.</p>
          </div>
        </div>

        <div className="welcome_card">
          <div className="img_container">
            <img src="/img/community.svg" alt="" />
          </div>
          <h2>Dazed Community</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>

        <div className="welcome_card">
          <div className="img_container">
            <img src="/img/delivery.svg" alt="" />
          </div>
          <h2>Dazed Community</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>

        <div className="welcome_card">
          <div className="img_container">
            <img src="/img/snap.png" alt="" />
          </div>
          <h2>Dazed Community</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>


      </grid>
    </div>
  )
}

export default Welcome