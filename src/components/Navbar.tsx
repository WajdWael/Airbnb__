import aribinLogo from '../assets/images/airbnb-logo.png'

export default function Navbar() {
    return <nav className='nav-container'>
        <img className='nav-img' src={aribinLogo} alt='Aribin Logo' />
    </nav>
}