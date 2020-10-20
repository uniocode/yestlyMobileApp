import styled from 'styled-components'
import Colors from '../../specs/Colors'

export const NonScrollContainer = styled.View`

width: ${props => props.width ? props.width : '100%'};
height: ${props => props.height ? props.height : '100%'};
background: ${props => props.background ? props.background : Colors.yellow};
align-items: ${props => props.align ? props.align : 'center'};
justify-content: ${props => props.justify ? props.justify : 'center'};
paddingTop: ${props => props.paddingTop ? props.paddingTop : '0'};
`