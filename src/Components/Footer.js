import { FaInstagram, FaFacebookSquare, FaTwitter, FaGithubSquare } from 'react-icons/fa'
import { RiHomeWifiFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='navigation-footer'>
        <nav>
          <a href='#home'>
            <RiHomeWifiFill className='icon-footer' />Home</a> |
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
    </footer>
  )
}

export default Footer
