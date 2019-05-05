import React from 'react';

let style = {
    textAlign:'center',
    marginTop:'20px ',
    marginBottom:'30px '
}

let tileGenerator = (props)=>{
    return <h1 style={style}>{props.title}</h1>
}

export default tileGenerator;