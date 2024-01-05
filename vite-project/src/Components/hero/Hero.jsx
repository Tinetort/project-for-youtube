import { AiOutlineSearch } from 'react-icons/ai'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <h1>Find the perfect place</h1>
                <p className="search-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque, tempora!
                </p>
                <form className="form">
                    <div>
                        <input type="text" placeholder="Enter keyword..." />
                    </div>
                    <div className="radio">
                        <input type="radio" checked />
                        <label Buy></label>
                        <input type="radio" />
                        <label Rent></label>
                        <button type="submit">
                            <AiOutlineSearch className="icon" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
