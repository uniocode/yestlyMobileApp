import styled from 'styled-components'
import Colors from '../../specs/Colors'


export const BigText = styled.Text`
font-size: ${props => props.size ? props.size : '40px'};
color: ${props => props.color ? props.color : Colors.darkGray};

`