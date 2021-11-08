import '../styles/mediaInsightStyles.css'

function MediaInsight() {
  return (
    <div className='media_main'>
      <div className="grid">
        <div className="content">
          <h2 class="section_title">Industry leading Marijuana insight</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="socials">
            <img src="./img/facebook.svg" alt="" />
            <img src="./img/twitter.svg" alt="" />
            <img src="./img/instagram.svg" alt="" />
            <img src="./img/linkedin.svg" alt="" />
          </div>
        </div>
        <div className="img-wrapper">
          <img src="./img/article-photo.png" alt=""/>
          <div className="outline"></div>
        </div>
      </div>

      <div className="grey-bg"></div>
    </div>
  )
}

export default MediaInsight