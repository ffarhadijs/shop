import React from 'react';
import loading from '../../assets/loading.gif'

const Loader = () => {
    return ( 
        <div className='loader container-fluid'>
            <img src={loading} className='loader'/>
        </div>
     );
}
 
export default Loader;