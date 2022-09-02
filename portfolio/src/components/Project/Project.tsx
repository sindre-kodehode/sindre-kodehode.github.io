import ProjectI      from "../../types/project.type";
import StyledSection from "./Project.style";

export default ( project : ProjectI ) =>
<StyledSection>
    <header><h2>{ project.header }</h2></header>
    <picture> <img src={ project.image } alt={ project.title } /> </picture>
    <h1>{ project.title }</h1>
    <p><b>{ project.tags }</b></p>
    <p>{ project.desc }</p>
</StyledSection>
