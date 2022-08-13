import StyledParagraph from "./Price.style" ;
import { PriceProps }  from "./Price.type"  ;

export default ( { price }: PriceProps ) => <StyledParagraph>
  $ { price.toFixed( 2 ) }
</StyledParagraph>
