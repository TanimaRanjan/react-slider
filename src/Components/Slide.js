import React from 'react'
import styled from 'styled-components'


const SlideCSS = styled.div`
    height:100%;
    width:100%;
    background-image:url('${imageUrl => imageUrl}');
    background-color:pink;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;

`

const Slide = ({content}) => {

    console.log(content)
    return (
        <SlideCSS imageUrl={content.imageUrl} >

            <figure>
                <img src={content.imageUrl} height={content.height} width={content.width} />
                <figcaption >{content.title}</figcaption>
            </figure>
        </SlideCSS>
    )
}

export default Slide