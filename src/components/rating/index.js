import React from 'react';
import { FaStar } from 'react-icons/fa';
import { withRouter } from '../withRouter';
import './styles.css';

class Rating extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            actualRating: 0,
            name: '',
            companyName: '',
            email: '',
            validation: false,
            validationError: "",
            companies: [],
        }

        this.updateStateName = this.updateStateName.bind(this);
        this.updateStateCompany = this.updateStateCompany.bind(this);
        this.updateStateEmail = this.updateStateEmail.bind(this);
    }

    async updateStateName(event)
    {
        await this.setState({ name: event.target.value });
    }

    async updateStateEmail(event)
    {
        await this.setState({ email: event.target.value });
    }

    updateStateCompany(event)
    {
        this.setState({ companyName: event.target.value });
    }

    async sendCalification()
    {   
        if(this.state.name == null 
            || this.state.name == ""
            || this.state.companyName == null
            || this.state.companyName == "")
        {
            await this.setState({ validation: true });
            this.setState({ validationError: "Por favor, complete todos los campos."})
            return false;
        }

        if(this.state.name.length < 3 || this.state.companyName.length < 3)
        {
            await this.setState({ validation: true });
            this.setState({ validationError: "Los nombres deben contener al menos 3 caracteres."})
            return false;
        }

        if(this.state.actualRating == 0)
        {
            await this.setState({ validation: true });
            this.setState({ validationError: "Por favor, ingrese una calificación del uno al cinco."})
            return false;
        }

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!re.test(this.state.email))
        {
            await this.setState({ validation: true });
            this.setState({ validationError: "Por favor, ingrese una casilla de correo válida."});
            return false;
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": this.state.name,
                "stars": this.state.actualRating,
                "company": {
                    "name": this.state.companyName
                }
            }),
        };

        console.log("Sending...");

        fetch("http://localhost:3000/comments", options)
            .then((response) => response.json())
            .then(
                (result) => {
                    this.props.navigate('/comments')
                },
                async (error) => {
                    console.log(error);
                    await this.setState({ validation: true });
                    this.setState({ validationError: "Parece que el servidor no se encuentra disponible. Intentelo más tarde."});
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
                            <input type="text" 
                                name='name' id='name' 
                                className='form-control' 
                                maxLength={50}
                                value={this.state.name} 
                                onChange={this.updateStateName} />
                        </div>

                        <div className='row ml-5 mr-5'>
                            <label htmlFor="comment">Email</label>
                            <input type="text" 
                                name='email' id='email' 
                                className='form-control' 
                                maxLength={25}
                                value={this.state.email} 
                                onChange={this.updateStateEmail} />
                        </div>

                        <div className='row ml-5 mr-5'>
                            <label htmlFor="comment">Empresa</label>
                            <input type="text" name='enterprise' 
                                id='enterprise' className='form-control' 
                                maxLength={50}
                                value={this.state.companyName} 
                                onChange={this.updateStateCompany} />
                        </div>

                        <div className='row ml-5 mr-5'>
                            <button className='btn btn-primary mt-3' onClick={ () => this.sendCalification() }>Enviar comentario</button>
                        </div>

                        <div className='row mt-5 ml-5 mr-5 validationError'>
                            <span>
                                { this.state.validation ? this.state.validationError : "" }
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
        );
    }
}

export default withRouter( Rating );
