import './Header.css'
import Logo from './Logo'

export const Header = () => {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
        <Logo />
    </header> 

  )
}

export default Header