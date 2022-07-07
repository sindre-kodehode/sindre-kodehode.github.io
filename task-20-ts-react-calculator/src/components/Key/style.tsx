import styled from "styled-components";

const StyledButton = styled.button`
  border-style  : solid                                                ;
  border-radius : 0.5rem                                               ;
  border-width  : 0rem 0rem 0.25rem 0rem                               ;
  border-color  : ${ ({ theme }) => theme.palette.tertiaryShadow     } ;

  color         : ${ ({ theme }) => theme.palette.textDark           } ;
  background    : ${ ({ theme }) => theme.palette.tertiaryBackground } ;

  font-family   : ${ ({ theme }) => theme.font.fontFamily            } ;
  font-size     : 2.5rem                                               ;

  height        : 4rem                                                 ;

  transition    : background ease 200ms                                ;

  &:active {
    border     : none                            ;
    box-shadow : 0rem 0.25rem 0.5rem black inset ;
  }

  &:hover { background : ${ ({ theme }) => theme.palette.tertiaryHover } ; }

  &:nth-child(4),
  &:nth-last-child(1),
  &:nth-last-child(2) {
    font-size : 1.6875rem ;
  }

  &:nth-child(4),
  &:nth-last-child(2) {
    color        : ${ ({ theme }) => theme.palette.textLight           } ;
    background   : ${ ({ theme }) => theme.palette.secondaryBackground } ;
    border-color : ${ ({ theme }) => theme.palette.secondaryShadow     } ;

    &:hover {
      background : ${ ({ theme }) => theme.palette.secondaryHover      } ;
    }
  }

  &:nth-last-child(1) {
    color        : ${ ({ theme }) => theme.palette.textLight         } ;
    background   : ${ ({ theme }) => theme.palette.primaryBackground } ;
    border-color : ${ ({ theme }) => theme.palette.primaryShadow     } ;

    &:hover {
      background : ${ ({ theme }) => theme.palette.primaryHover      } ;
    }
  }
`;

export default StyledButton;
