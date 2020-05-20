import styled from "styled-components";
import bgImage from "../../images/background.jpg";

let BackgroundImage = styled.div`
    background-image: url(${bgImage});
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export default BackgroundImage;
