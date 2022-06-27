import styled         from "styled-components";
import profilePicture from "../img/profile-picture.png";

const StyledImg = styled.img`
  border-radius : 10px 10px 0px 0px ;
  height        : 317px             ;
  width         : 317px             ;
`;

const ProfilePicture = () =>
  <StyledImg src={ profilePicture } />

export default ProfilePicture;
