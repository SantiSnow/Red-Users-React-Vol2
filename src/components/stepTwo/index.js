import React from 'react';
import Header from '../header';
import Comments from '../comments';
import Footer from '../footer';
import Rating from '../rating';
import './stepTwo.css';


class StepTwo extends React.Component{
  render()
  {
    return (
      <>
        <Header></Header>
          <div className='container'>
            <div className='row d-flex justify-content-center'>
              <div className='col-12 col-sm-12 col-md-10 col-lg-10'>
                {<Comments></Comments>}
              </div>
            </div>
          </div>
        <Footer></Footer>
      </>
    );
  }
}

export default StepTwo;
