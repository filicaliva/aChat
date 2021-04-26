import React from "react"
import { Title, TitleContainer } from "../../style/Home/index"

type ContainerHomeType = {title: string}


const ContainerHome: React.FC<ContainerHomeType> = (props) =>{
    return(
        <TitleContainer>
            <Title>{props.title}</Title>
            {props.children}
        </TitleContainer>

    )
}

export default ContainerHome