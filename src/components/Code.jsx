import { Box } from "@mui/system";

import { styled } from "@mui/material";

import Editor from "./Editor";


const Container = styled(Box)`
    background-color: #060606;
    height:50vh;
    display:flex
`

const Code = () => {
    return (
        <Container>
            <Editor
                heading='HTML'
                icon='/'
                color='#FF3C41'
            />
            <Editor
                heading='CSS'
                icon='*'
                color='#0EBEFF'
            />
            <Editor
                heading='JS'
                icon='( )'
                color='#FCD000'
            />
            
        </Container>
    )
}

export default Code;

