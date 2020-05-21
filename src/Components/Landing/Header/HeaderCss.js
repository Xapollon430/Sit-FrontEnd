import styled from "styled-components";

export const Navbar = styled.div`
    padding: 20px 30px 20px 20px;
    display: grid;
    grid-template-areas: "brand nav";
    grid-template-columns: 100px auto;
    align-items: center;
    justify-items: center;
    @media (max-width: 700px) {
        grid-template-areas:
            "brand menu"
            "nav nav";
    }
`;

export const Nav = styled.div`
    grid-area: nav;
    width: 100%;
    display: ${(props) => (props.close === false ? "none" : "grid")};
    grid-gap: 10px;
    grid-template-columns: 120px 120px 1fr 120px 120px;
    @media (max-width: 700px) {
        grid-template-columns: none;
        grid-template-rows: repeat(4, auto);
    }
`;

export const Menu = styled.i`
    grid-area: menu;
    display: none;
    color: white;
    @media (max-width: 700px) {
        display: block;
        justify-self: end;
        padding-right: 20px;
    }
`;

export const Brand = styled.h1`
    grid-area: brand;
    font-size: 3rem;
    color: white;
    margin: 0px;
    font-family: "Quicksand", sans-serif;
    @media (max-width: 700px) {
        display: block;
        grid-area: brand;
    }
`;

export const EmptyDiv = styled.div`
    @media (max-width: 700px) {
        display: none;
    }
`;

export const Button = styled.button`
    font-family: inherit;

    color: white;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: white 2px solid;
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
    height: 45px;
    border-radius: 5px;
    &:hover ${Button} {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
