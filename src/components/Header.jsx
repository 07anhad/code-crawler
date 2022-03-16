
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import styled from "@emotion/styled";

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
    position:static
`

const Header = () => {

    const logo ='./—Pngtree—business direction pointing arrow_5939217.png'

    return (
        <Container>
            <Toolbar>
                <img src={logo} alt="logo" style={{width:40}}/>
            </Toolbar>
        </Container>
    )
}

export default Header;