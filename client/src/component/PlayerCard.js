import React from 'react';
import style from 'styled-components'

const DIV1 = style.div`
// width: 90%;
align-content: center;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: center;

`


const DIV = style.div`
width: 30%;
border: 1px solid blue;
padding: 3%;
margin: 3%;
display: flex;
flex-direction: column;
`


const PlayerCard = ({users}) => {

    return(
        <DIV1 >
            {users.map(user => {
                return(
                    <DIV className="ind-cards">
                        <div>
                            {user.name}

                        </div>

                        <div>
                            {user.country}

                        </div>
                        
                    </DIV>

                )
            })}


        </DIV1>
    )

}

export default PlayerCard;