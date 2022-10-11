import React from "react";



const KeyboardEmbed =({source,description, youtube}) =>{
    return(
        <div className="keyboard-postdiv">
            <img src = {require(`../Images/Keyboard/${source}`)} alt= "keyboard img broken" width="50%" height="auto"/>
            
            <div className="keyboard-Textblock">
                <text className="text-block">
                {description}
                </text>
                <a href={youtube} target ="=_blank">A short youtube sound test!</a>
            </div>
        </div>
    )
};

export default KeyboardEmbed;

