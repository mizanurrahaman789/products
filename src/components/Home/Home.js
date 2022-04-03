import React from 'react';
import Header from '../Header/Header';
import Logo from '../Logo/pic.png'
import './Home.css'



const Home = () => {
      return (
            <div>
                  <Header></Header>

                  <div >
                        <div className='home-container'>
                              <div className='home-children-text'>
                                    <h1>This is a best </h1>
                                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h3>
                                    <button>Click me</button>
                              </div>
                              <div className='home-children-img'>
                                    <img src={Logo} alt=""></img>
                              </div>
                        </div>
                        <div className='home-cart'>
                              <h1>Customer Reviews</h1>
                        </div>
                  </div>
                  <div></div>
            </div >
      );
};

export default Home;