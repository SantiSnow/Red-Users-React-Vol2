import React from 'react';
import Header from '../header';
import Comments from '../comments';
import Footer from '../footer';
import Rating from '../rating';
import './App.css';

class App extends React.Component{
  render()
  {
    return (
      <>
        <Header></Header>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                <Rating></Rating>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6'>
                {/*<Comments></Comments>*/}
              </div>
            </div>
          </div>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
