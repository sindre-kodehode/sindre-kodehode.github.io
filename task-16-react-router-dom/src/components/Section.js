import styled from "styled-components";

const StyledHeading = styled.h2`
  color       : #6d6d6d ; 
  font-weight : 300     ;
`;

const StyledSectionHome = styled.section`
  max-width  : 75ch   ;
  margin     : 0 auto ;
  text-align : center ;
`;

const StyledSectionOne = styled.section`
  max-width : 75ch   ;
  margin    : 0 auto ;
`;

const StyledSectionTwo = styled.section`
  columns    : 2      ;
  margin     : 0 auto ;
  max-width  : 75ch   ;
`;

const StyledSectionThree = styled.section`
  columns    : 3      ;
  margin     : 0 auto ;
  max-width  : 75ch   ;
`;

export const SectionHome = () => {
  return (
    <StyledSectionHome>
      <StyledHeading>This is Home</StyledHeading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        incidunt non placeat magni eveniet sapiente cumque ad iure facere
        pariatur voluptates tenetur, enim nam! Quisquam est facilis sequi eius
        blanditiis porro sapiente dolore aperiam soluta impedit! Facere unde
        recusandae blanditiis dolores excepturi dolore perspiciatis architecto,
        pariatur qui nemo provident eaque voluptatem necessitatibus, vel culpa
        tempore sit eum maxime deserunt cumque! Repellendus provident hic nostrum
        quisquam minus id, iure odio, iusto voluptas eius sequi rerum porro
        nam debitis. Quos animi eos corrupti dolorem id. Quibusdam a soluta
        blanditiis saepe quos! Accusamus nulla ipsam nostrum quod architecto,
        officia esse itaque adipisci id.
      </p>
    </StyledSectionHome>
  );
};

export const SectionOne = () => {
  return (
    <StyledSectionOne>
      <StyledHeading>This is Section One</StyledHeading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        incidunt non placeat magni eveniet sapiente cumque ad iure facere
        pariatur voluptates tenetur, enim nam! Quisquam est facilis sequi eius
        blanditiis porro sapiente dolore aperiam soluta impedit! Facere unde
        recusandae blanditiis dolores excepturi dolore perspiciatis architecto,
        pariatur qui nemo provident eaque voluptatem necessitatibus, vel culpa
        tempore sit eum maxime deserunt cumque! Repellendus provident hic nostrum
        quisquam minus id, iure odio, iusto voluptas eius sequi rerum porro
        nam debitis. Quos animi eos corrupti dolorem id. Quibusdam a soluta
        blanditiis saepe quos! Accusamus nulla ipsam nostrum quod architecto,
        officia esse itaque adipisci id.
      </p>
    </StyledSectionOne>
  );
};

export const SectionTwo = () => {
  return (
    <StyledSectionTwo>
      <StyledHeading>This is Section Two</StyledHeading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        incidunt non placeat magni eveniet sapiente cumque ad iure facere
        pariatur voluptates tenetur, enim nam! Quisquam est facilis sequi eius
        blanditiis porro sapiente dolore aperiam soluta impedit! Facere unde
        recusandae blanditiis dolores excepturi dolore perspiciatis architecto,
        pariatur qui nemo provident eaque voluptatem necessitatibus, vel culpa
        tempore sit eum maxime deserunt cumque! Repellendus provident hic nostrum
        quisquam minus id, iure odio, iusto voluptas eius sequi rerum porro
        nam debitis. Quos animi eos corrupti dolorem id. Quibusdam a soluta
        blanditiis saepe quos! Accusamus nulla ipsam nostrum quod architecto,
        officia esse itaque adipisci id.
      </p>
    </StyledSectionTwo>
  );
};

export const SectionThree = () => {
  return (
    <StyledSectionThree>
      <StyledHeading>This is Section Three</StyledHeading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        incidunt non placeat magni eveniet sapiente cumque ad iure facere
        pariatur voluptates tenetur, enim nam! Quisquam est facilis sequi eius
        blanditiis porro sapiente dolore aperiam soluta impedit! Facere unde
        recusandae blanditiis dolores excepturi dolore perspiciatis architecto,
        pariatur qui nemo provident eaque voluptatem necessitatibus, vel culpa
        tempore sit eum maxime deserunt cumque! Repellendus provident hic nostrum
        quisquam minus id, iure odio, iusto voluptas eius sequi rerum porro
        nam debitis. Quos animi eos corrupti dolorem id. Quibusdam a soluta
        blanditiis saepe quos! Accusamus nulla ipsam nostrum quod architecto,
        officia esse itaque adipisci id.
      </p>
    </StyledSectionThree>
  );
};
