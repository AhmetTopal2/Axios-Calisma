import styled from "styled-components";




const StyledDiv = styled.div`
    width:100%;
    height:10rem;   
    background-color:rgba(42, 74, 70, 1);
    color:white;
    justify-content:center;
    display:flex;
    align-items:center;
`
function Footer() {
    return (
        <>
            <StyledDiv>
                2024@CopyRight
            </StyledDiv>
        </>

    );
}

export default Footer;