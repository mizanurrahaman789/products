
import Logo from '../Logo/pic.png'
import Shop from '../Shop/Shop';


import './Home.css'



const Home = () => {


      return (
            <div>
                  <div >
                        <div className='home-container'>
                              <div className='home-children-text'>
                                    <h1>Best cameras for vlogging</h1>
                                    <h3>The best cameras for vlogging have certain features that made them perfect for this new style of content creation. More often than not, vloggers don't have anyone to help them film, they are solo content creators that rely on things like a flip-out screen, decent stabilization and mic input. Vlogging cameras can be anything from a compact action camera for the adventure seeker or larger mirrorless system that can shoot great pictures too. </h3>
                                    <button>Click me</button>
                              </div>
                              <div className='home-children-img'>
                                    <img src={Logo} alt=""></img>
                              </div>
                        </div>
                        <div className='cart-comtainer'>

                              <div>
                                    <Shop></Shop>
                              </div>
                        </div>
                  </div>



            </div >
      );
};

export default Home;