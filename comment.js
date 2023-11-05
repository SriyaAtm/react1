import React,{ useState } from 'react';

function Comment(){
    const [title,handler] = useState('good morning')
    return(
        <div>
            <h1>{title}</h1>
            <button onClick={() => handler('Title changed')}>Hi</button>


        </div>
    )

}

export default Comment 