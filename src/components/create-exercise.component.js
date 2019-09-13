import React, { Component } from 'react';
import { directive } from '@babel/types';
import { setupMaster } from 'cluster';

class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.state = {
            username : '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    render() {
        return (
            <div>
                <p>Create Exercise component!</p>
            </div>
        );
    }
}

export default CreateExercise;