import React from 'react';
// import { graphql, compose } from 'react-apollo';
// import { addBookMutation, getBooksQuery } from '../queries/queries'

class AddAuthors extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: ''
        };
    }

    
    render(){
        // console.log(this.props)
        return(
            <div>
                <form id="add-author" style={ { marginTop: '150px' } }>
                    <div className="field">
                        <label>Author Name</label>
                        <input type="text" onChange={ (e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Author Age</label>
                        <input type="text" onChange={ (e) => this.setState({ age: e.target.value })} />
                    </div>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default AddAuthors ;