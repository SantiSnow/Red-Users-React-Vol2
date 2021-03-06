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
            <div className='row d-flex justify-content-center'>
              <div className='col-12 col-sm-12 col-md-10 col-lg-10'>
                <Rating></Rating>
              </div>
            </div>
          </div>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
