import React from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

class Rating extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            actualRating: 0,
        }
    }


    sendCalification()
    {

        const name = document.getElementById("name").value;
        const enterprise = document.getElementById("enterprise").value;
        
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": 5,
                "name": name,
                "stars": this.state.actualRating,
                "company": {
                    "name": enterprise
                }
            }),
        };

        console.log("Sending...");

        fetch("http://localhost:3000/comments", options)
            .then((response) => response.json())
            .then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    async cambiarRating(value)
    {
        await this.setState({actualRating:value});
        console.log(this.state.actualRating);
    }

    render()
    {
        return (
        <>
            <div className='card'>
                <div className="card-body">
                    <h5 className="card-title">Califique nuestros servicios</h5>

                    <div onSubmit={() => this.sendCalification()}>

                        <div className="row d-flex justify-content-center mt-5 mb-4">
                            {[ ...Array(5)].map((star, i)=>{
                                const value = i + 1;
                                
                                return (
                                    <label className='labelStar' key={value}>
                                        <input type="radio" name="rating" value={value} onClick={() => this.cambiarRating(value) } /> 
                                        <FaStar 
                                            className='star' 
                                            size={50} 
                                            color={ value <= this.state.actualRating  ? "#ffc107" : "#e4e5e9"} />
                                    </label>
                                );
                                
                            })}
                        </div>

                        <div className='row ml-5 mr-5'>
                            <label htmlFor="comment">Nombre</label>
                            <input type="text" name='name' id='name' className='form-control' />
                        </div>

                        <div className='row ml-5 mr-5'>
                            <label htmlFor="comment">Empresa</label>
                            <input type="text" name='enterprise' id='enterprise' className='form-control' />
                        </div>

                        <div className='row ml-5 mr-5'>
                            <button className='btn btn-primary mt-3' onClick={ () => this.sendCalification() }>Enviar comentario</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default Rating;
