import './header.css'
import headerImg from '../../assets/images/header.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={headerImg} alt="headerimg" />
    </div>
  )
}

export default Header