import apt1 from './../../assets/apt1.jpg'
import apt2 from './../../assets/apt2.jpg'
import apt3 from './../../assets/apt3.jpg'

import './Best.css'


const Best = () => {
  return (
    <div className="best">
        <h1>Find Best Rated Appartmets</h1>
        <div>
            <p><span className="bold">All</span></p>
            <p>Commercial</p>
            <p>Residential</p>
            <p>Agricurtual</p>
        </div>
        <div className="container">
            <img src={apt1} alt="" />
            <img src={apt2} alt="" />
            <img src={apt3} alt="" />

        </div>
    <button className='btn'>View All</button>
    </div>
  )
}

export default Best