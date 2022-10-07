import React from "react";


const KeyboardEmbed =({source}) =>{
    return(
        <div 
            style={{
            display: 'flex',
            justifyContent: 'Center',
            flexDirection: 'row',
            alignItems: 'Center'
        }}>
        <img src = {require(`../Images/Keyboard/${source}`)} alt= "keyboard img broken"width="400" height="auto"/>
        <text>Hello World</text>
        </div>
    )
};

export default KeyboardEmbed;

