import '../styles/welcomeStyles.css'
import { Grid } from 'react-bootstrap-icons'

function Welcome() {
  return (
    <div className='welcome_main'>
      <grid className='grid'>

        <div className='welcome2_main'>
          <div className="title">
            <h2 class="section_title">Welcome to dazed</h2>
            <p>Dazed is your one stop shop for access to top of the line barnds, deals , and delivery</p>
          </div>
        </div>

        <div className="welcome_card">
          <img src="/img/community.svg" alt="" />
          <h2>Dazed Community</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>

        <div className="welcome_card">
          <img src="/img/delivery.svg" alt="" />
          <h2>Dazed Community</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>

        <div className="welcome_card">
          <img src="/img/snap.png" alt="" />
          <h2>Dazed Community</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>


      </grid>
    </div>
  )
}

export default Welcome