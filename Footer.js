import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { FaInstagram, FaFacebookSquare, FaTwitter, FaGithubSquare } from 'react-icons/fa'
import { MdOutlineContactMail } from 'react-icons/md'
import { RiHomeWifiFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='navigation-footer'>
        <nav>
          <a href='#home'>
            <RiHomeWifiFill className='icon-footer' />Home
          </a> |
          <a href='https://www.instagram.com/zaqwanay/'>
            <FaInstagram className='icon-footer' />
          </a> |
          <a href='https://twitter.com/ZaqwanAY'>
            <FaTwitter className='icon-footer' />
          </a> |
          <a href='https://www.facebook.com/alex.yesufu'>
            <FaFacebookSquare className='icon-footer' />
          </a> |
          <a href='https://github.com/zaqwanay'>
            <FaGithubSquare className='icon-footer' />
          </a>
        </nav>
      </div>

      {/* Add Lottie animation */}
      <div className="footer-animation">
        <Player
          src="https://assets1.lottiefiles.com/packages/lf20_M5PJHFF7vA.json"
          style={{ height: '150px', width: '150px' }}
          loop
          autoplay
        >
          <Controls visible={false} />
        </Player>
      </div>

      {/* Add Mail Icon and Contact Section */}
      <div className="footer-contact">
        <MdOutlineContactMail className='icon-footer' />
        <p>Contact us at: your.email@example.com</p>
      </div>
    </footer>
  )
}

export default Footer
