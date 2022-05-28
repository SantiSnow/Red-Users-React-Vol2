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
        console.log("Sending...");
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

                    <form onSubmit={() => this.sendCalification()}>

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
                            <label htmlFor="comment">Comentarios</label>
                            <input type="text" name='comment' id='comment' className='form-control' />
                        </div>

                    </form>
                </div>
            </div>
        </>
        );
    }
}

export default Rating;
