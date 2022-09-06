import Description   from "../Description";
import Picture       from "../Picture";
import ProjectProps  from "./Project.type";
import StyledSection from "./Project.style";
import Tags          from "../Tags";
import Title         from "../Title";
import Section       from "../Section";

export default ( { project : { 
  desc,
  header,
  image,
  tags,
  title,
  url,
} } : ProjectProps ) =>
<Section header={ header }>
  <StyledSection>
      <Picture      src={ image } alt={ title } url={ url } />
      <Title       text={ title }                           />
      <Tags        tags={ tags  }                           />
      <Description text={ desc  }                           />
  </StyledSection>
</Section>
