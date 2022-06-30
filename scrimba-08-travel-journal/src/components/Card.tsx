import styled            from "styled-components";
import Heading1          from "./Heading1";
import Heading3          from "./Heading3";
import Image             from "./Image";
import Paragraph         from "./Paragraph";
import LocationContainer from "./LocationContainer";

import { CardType }      from "../consts/data";

const StyledArticle = styled.article`
  display : grid      ;
  gap     : 0rem 1rem ;
  height  : 13rem     ;
  padding : 1rem 2rem ;
  width   : 34rem     ;

  grid : 
  "image .          " 1fr
  "image location   " 1fr
  "image name       " 2fr
  "image .          " 1fr
  "image date       " 1fr
  "image description" 5fr / 9fr 20fr ;

  & > :nth-child( 1 ) { grid-area : image       ; }
  & > :nth-child( 2 ) { grid-row  : location    ; }
  & > :nth-child( 3 ) { grid-row  : name        ; }
  & > :nth-child( 4 ) { grid-row  : date        ; }
  & > :nth-child( 5 ) { grid-row  : description ; }
`;

type CardProps = { data : CardType };

const Card = ({ 
  data: {
    name,
    location,
    map,
    description,
    startDate,
    endDate,
    img : {
      src,
      alt,
},}}: CardProps ) =>
  <StyledArticle>

    <Image alt={ alt } src={ src } />

    <LocationContainer location={ location } map={ map } />

    <Heading1>{ name }</Heading1>

    <Heading3>{ `${ startDate } - ${ endDate }`}</Heading3>
    <Paragraph>{ description }</Paragraph>

  </StyledArticle>

export default Card;
