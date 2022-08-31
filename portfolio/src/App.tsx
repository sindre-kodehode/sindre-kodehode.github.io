/* styles */
import "./App.css";

/* consts */
import eigenskapar  from "./consts/eigenskapar";
import ferdigheiter from "./consts/ferdigheiter";
import om           from "./consts/om";
import prosjekt     from "./consts/prosjekt";
import sysler       from "./consts/sysler";

/* App */
export default () => <>
  <section>
    <h2> OM MEG </h2>{
    om.map( ({ id, om }) => 
    <p key={ id }>{ om }</p> )
  }</section>

  <section>
    <h2> EIGENSKAPAR </h2>{
    eigenskapar.map( ({ id, eigenskap }) =>
    <p key={ id }>{ eigenskap }</p> )
  }</section>

  <section>
    <h2> FERDIGHEITER </h2> {
    ferdigheiter.map( ({ id, ferdigheit }) =>
    <p key={ id }>{ ferdigheit }</p> )
  }</section>

  <section>
    <h2> SYSLER </h2>{
    sysler.map( ({ id, sysle }) =>
    <p key={ id }>{ sysle }</p> )
  }</section>

  <section>
    <h2> PROSJEKT </h2>{
    prosjekt.map( ({ title, desc, id, src }) => 
    <article key={ id }>
      <h2>{ title }</h2>
      <picture>
        <img src={ src } alt={ title } />
      </picture>
      <p>{ desc }</p>
    </article> )
  }</section>
</>;
