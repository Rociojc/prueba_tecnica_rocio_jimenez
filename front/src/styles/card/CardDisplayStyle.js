import styled from "styled-components";

export const SectionDisplay = styled.section`
    padding: 20px;
    display: grid;
    gap: 10px;
    text-align: justify;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 40px 120px 40px 40px 100px;
        align-content: center;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 500px 500px;
        justify-content: center;
    }
`

export const ImgDisplay = styled.img`
    border-radius: 10px;

    @media (min-width: 768px) {
        grid-column: 1 / 2;
        grid-row: 1 / 5;
        height: 270px;
    }

    @media (min-width: 1024px) {
        height: 380px;
    }
`

export const ButtonAdd = styled.button`
    width: 200px;
    height: 50px;
    justify-self: center;
    font-size: 1.2rem;
    background-color: #fe823a;
    border: none;
    border-radius: 5px;
    transition: all 100ms ease-in-out;

    &:active {
        background-color: #9ec4b2;
    }

    @media (min-width: 768px) {
        grid-column: 1 / 3;
        place-self: center;
    }

    @media (min-width: 1024px) {
        grid-column: 2 / 3;
    }
`