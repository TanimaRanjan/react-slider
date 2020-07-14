import React from 'react'
import styled from 'styled-components'


const SliderContentCSS = styled.div`
transform: translateX(-${props => props.translate}px);
transition: transform ease-out ${props => props.transition}s;
height: 100%;
width: ${props => props.width}px;
display:flex;
background-color:blue;
`

const SliderContent = (props) => {
    return (
        <SliderContentCSS {...props}>
           
        </SliderContentCSS>
    )
}



export default SliderContent

