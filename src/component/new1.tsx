import './new1.css'
import img1 from '../assets/star.png'
import img2 from  '../assets/srch.svg'
import img3 from '../assets/user.svg'

function New1() {


  return (
    <>
   <div className='main'>
    <div className='navbar'>
      <div className='nlogo'>
        <div className='nlogs'><img src={img1} /></div>
         <div className='nlogname'>StarWish</div>
      </div>
      <div className='nlinks'>
        <div className='nlink1'>Browse Celebrities</div>
        <div className='nlink2'>My Orders</div>
      </div>
      <div className='nbutton'>
        
          
          <button className='login'>
            <img src={img3}/>
              <a href="">Login</a></button>
          <button className='signup'><a href="">Sign Up</a></button>
    
        
      </div>
    </div>
    <div className='middle'>
       <div className="bg-slider">
          <div className="bg-track">
            <div className="bg-slide slide1"></div>
            <div className="bg-slide slide2"></div>
            <div className="bg-slide slide3"></div>
            {/* Duplicates to create a seamless infinite loop */}
            <div className="bg-slide slide1"></div>
            <div className="bg-slide slide2"></div>
          </div>
        </div>

      <div className='middlem'>
        <div className='ma'>
          <div className='ma1'>
            <div className='ma1a'><span className='stare'>⭐</span> Trusted by 100,000+ Happy Customers</div>
          </div>
           <div className='ma2'><span className='ae1'>Book Personalized <br /> Video Messages From  <br />Your </span><span className='ae2'>Favourite</span><br /><span className='ae3'>Celebrities</span> </div>
            <div className='ma3'>For Birthdays, Anniversaries, Best Wishes & More. Make any <br /> occasion unfoergettable with a personal message from the stars.</div>
             <div className='ma4'>
              <div className='searchbar'>
                <div className='sl'><img src={img2} /></div> 
                <div className='sln'><input type="text" placeholder='Search for a celebrity...'/></div>
              </div>
              <div className='search'><button>Search</button></div>
             </div>
              <div className='ma5'>
                Popular:
                <button className='actors'>Actors</button>
                <button className='influencers'>Influencers</button>
                <button className='singers'>Singers</button>
                <button className='comedians'>Comedians</button>
              </div>
        </div>
        
      </div>
    </div>
   </div>
    </>
      )
}
export default New1
