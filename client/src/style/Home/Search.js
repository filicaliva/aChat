import styled from 'styled-components'
import {green, green_box_shadow} from '../shared/variables'

import { ThemeButton } from './Themes'

const SearchButton = styled(ThemeButton)`
    background-color: ${green};
    margin: auto;
    &:hover{
    box-shadow: ${green_box_shadow}
    }
`

export  {SearchButton}