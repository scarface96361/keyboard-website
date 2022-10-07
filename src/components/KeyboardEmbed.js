import React from "react";



const KeyboardEmbed =({source,description, youtube}) =>{
    return(
        <div 
            style={{
            display: 'flex',
            justifyContent: 'Center',
            flexDirection: 'row',
                alignItems: 'Center',
            width:"60%"
            
        }}>
            <img src = {require(`../Images/Keyboard/${source}`)} alt= "keyboard img broken"width="50%" height="auto"/>
            
            <div style={{
                display: 'flex',
                justifyContent: 'Center',
                flexDirection: 'column',
                alignItems: 'Center',
            }}>
                <text style={{flexShrink: 1, flexWrap: 'wrap' }}>
                {description}
                </text>
                <a href={youtube}>{youtube}</a>
            </div>
        </div>
    )
};

export default KeyboardEmbed;

