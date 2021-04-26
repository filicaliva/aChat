import logo from '../../style/assert/logo.png'
import {LogoContainer} from '../../style/shared/Logo'

export default function Logo(){

    return(
        <LogoContainer>
            <img src={logo} alt=""/>
        </LogoContainer>
    )
}