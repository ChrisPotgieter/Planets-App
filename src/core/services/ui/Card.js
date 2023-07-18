import React from 'react';
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import img1 from "../../../images/Mars.jpg";

function Card (props) {

   const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 210px 210px 80px;
    grid-template-areas: "image" "text" "stats";
    border-radius: 18px;
    background: #000;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    text-align: center;
    z-index: -1;
  `;

   const CardImage = styled.div`
  grid-area: image;
  background-image: url(${img1});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

 const CardTextWrapper = styled.div`
  grid-area: text;
 
`;

 const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

 const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: linear-gradient(
    110.78deg,
    rgb(118, 230, 80) -1.13%,
    rgb(249, 214, 73) 15.22%,
    rgb(240, 142, 53) 32.09%,
    rgb(236, 81, 87) 48.96%,
    rgb(255, 24, 189) 67.94%,
    rgb(26, 75, 255) 85.34%,
    rgb(98, 216, 249) 99.57%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

 const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

	return (
<div>
<Tilt>
      <CardWrapper>
        <CardImage background={img1} />
        <CardTextWrapper>
          <CardTextTitle>{props.title}</CardTextTitle>
          <CardTextBody>
          <h2>Temperature:<span>{props.planetData.temperature}</span>  Radius:<span>{props.planetData.radius}</span></h2>
          <h2>Mass:<span>{props.planetData.mass}</span>  Radius:<span>{props.planetData.radius}</span></h2>
         
          </CardTextBody>
        </CardTextWrapper>

      </CardWrapper>
    </Tilt>
</div>
	);
}


export default Card;