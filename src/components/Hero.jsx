import { logo } from '../assets'

const Hero = () => {
    return (
        <header>
            <nav>
                <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>
            </nav>
        </header>
    )
}

export default Hero