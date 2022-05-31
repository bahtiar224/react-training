
import React from 'react';
import CardName from './CardName';
import '../Style/W3S.css';

export class StateComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            fname:'',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleNameChange(event){
        this.setState({fname: event.target.value});

    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Halo: ' + this.state.fname);

    }

    render() {
        return (
            <div className="example">
                <form className='contains' onSubmit={this.handleSubmit}>
                    <p>  
                        <label><b>Nama</b></label>
                        <input type="text" className='w3-input w3-border' value={this.state.fname}  onChange=
                        {this.handleNameChange} />
                    </p>
                    <p>
                        <label><b>Usia</b></label>
                        <input type="number" className='w3-input w3-border' value={this.state.value} onChange=
                        {this.handleChange} />
                    </p>
                    <input className='w3-btn w3-blue' type="submit" value="Submit" />
                    <hr/>
                </form>
                <CardName 
                    name={this.state.fname}
                    age={this.state.value}
                />  
            </div>
        );
    }
}
