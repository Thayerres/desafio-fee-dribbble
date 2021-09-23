import { Background, ContainerTitle, ImageContainer, Title } from "./styles"
import BackgroundImage  from "../../assets/images/background-image.png"
import Logo from "../Logo"

const Sidebar = () => {
    return (
        <Background>
            <ContainerTitle>
                <Logo width={66} height={29} fill="#000000"/>
                <Title>Discover the world’s <br></br> top Designers & <br></br>Creatives.</Title>
            </ContainerTitle>
            <ImageContainer>
                <img src={BackgroundImage} alt="Background" />
            </ImageContainer>
        </Background>
    )
}

export default Sidebar