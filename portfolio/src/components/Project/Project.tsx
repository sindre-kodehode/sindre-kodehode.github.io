import Description   from "../Description";
import Header        from "../Header";
import Picture       from "../Picture";
import ProjectProps  from "./Project.type";
import StyledSection from "./Project.style";
import Tags          from "../Tags";
import Title         from "../Title";

export default ( { project : { 
  image,
  title,
  tags,
  desc
} } : ProjectProps ) =>
<StyledSection>
    <Header      text={ "project" }               />
    <Picture      src={ image     } alt={ title } />
    <Title       text={ title     }               />
    <Tags        tags={ tags      }               />
    <Description text={ desc      }               />
</StyledSection>
