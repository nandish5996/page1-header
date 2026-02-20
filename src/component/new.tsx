import './new.css'
import img1 from '../assets/star.png'
import img2 from  '../assets/srch.svg'

function New() {


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
        
          
          <button className='login'>🙎‍♂️  Login</button>
          <button className='signup'>Sign Up</button>
    
        
      </div>
    </div>
    <div className='middle'>
      <div className='middlem'>
        <div className='ma'>
          <div className='ma1'>
            <div className='ma1a'>⭐ Trusted by 100,000+ happy customers</div>
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
        <div className='mb'></div>
      </div>
    </div>
   </div>
    </>
      )
}
export default New