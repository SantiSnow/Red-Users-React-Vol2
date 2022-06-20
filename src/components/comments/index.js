import React from 'react';
import './comments.css'

class Comments extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      comments: [ ]
    }
  }

  getData = async () =>{
    fetch("http://localhost:3000/comments", {
      method: "GET",
      headers: {
          Accept: "application/json",
      },
  })
      .then((response) => response.json())
      .then(
          async (result) => {
              await this.setState({comments: result});
          },
          (error) => {
              console.log(error);
              return;
          }
      );
  }

  componentDidMount(){
    this.getData();
  }

  render()
  {
    return (
      <>
        <div className='card'>
            <div className="card-body">
              <h5 className="card-title">Comentarios de nuestros usuarios</h5>
            </div>
            <ul>
              {
                this.state.comments.map((comment, i) => {
                  return (
                    <li key={i}>
                      <strong>{comment.name} </strong> 
                      from <i>{comment.company.name}, </i> 
                      <strong> {comment.stars} stars </strong>
                    </li>)
                })
              }
            </ul>
        </div>
      </>
    );
  }
}

export default Comments;
