import '../styles/Banner.css'
import logo from '../assets/logo.png'

const Banner = () => {
  return (
    <div className='banner'>
      <img
        src={logo}
        alt="logo La maison jungle"
        className='banner-logo'
      />
      <h1 className='banner-title'>La maison jungle</h1>
    </div>
  )
}

export default Banner