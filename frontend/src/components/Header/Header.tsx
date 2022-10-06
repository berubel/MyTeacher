import { ContainerHeader, Logo } from "./Header.style";

const Header = () => {
    return (
        <ContainerHeader>
            <div>
                <Logo src='/images/myteacher.png'/>
            </div>
            <p>Find the best teacher for you!</p>

        </ContainerHeader>

    )
}
export default Header;