import "./App.css";

import eigenskapar  from "./consts/eigenskapar";
import ferdigheiter from "./consts/ferdigheiter";
import om           from "./consts/om";
import prosjekt     from "./consts/prosjekt";
import sysler       from "./consts/sysler";

import Project     from "./components/Project";
import Section     from "./components/Section";
import Description from "./components/Description";

export default () => <>
  <Section header={ "om meg" }> {
    om.map( ({ id, om }) => 
      <Description key={ id } text={ om } />
    )
  } </Section>

  <Section header={ "eigenskapar" }> {
    eigenskapar.map( ({ id, eigenskap }) =>
      <Description key={ id } text={ eigenskap } />
    )
  }</Section>

  <Section header={ "ferdigheiter" }> {
    ferdigheiter.map( ({ id, ferdigheit }) =>
      <Description key={ id } text={ ferdigheit } />
    )
  }</Section>

  <Section header={ "sysler" }> {
    sysler.map( ({ id, sysle }) =>
      <Description key={ id } text={ sysle } />
    )
  }</Section>

  {
    prosjekt.map( project =>
      <Project key={ project.id } project={ project }  />
    )
  }
</>;
