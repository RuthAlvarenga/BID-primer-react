import { Component } from 'react';
import OtroComponente from './OtroComponente';

class MiComponente extends Component {
    render() { 
        return (
            <>
                <p>Things I need to do: </p>
                <OtroComponente />
            </>
        );
        
    }
}

export default MiComponente;