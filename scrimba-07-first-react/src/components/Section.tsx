import Heading   from "./Heading";
import Paragraph from "./Paragraph";

export type SectionProps = {
  heading : string,
  body    : string,
};

const Section = ( { heading, body }:SectionProps ) =>
  <section>
    <Heading type="section"> { heading } </Heading>
    <Paragraph>              { body    } </Paragraph>
  </section>

export default Section;
