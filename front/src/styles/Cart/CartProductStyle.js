import styled from "styled-components";

export const ArticleCartStyle = styled.article`
    border: 1px solid black;
    border-left: 0;
    border-right: 0;
    padding: 20px;
    height: 180px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;

    @media (min-width: 768px) {
        width: 900px;
        justify-items: center;
        align-items: center;
    }
`

export const ImgCartStyle = styled.img`
   grid-row: 1 / 3;

   @media (min-width: 768px) {
        grid-row: initial;
    }
`

export const NameProdCartStyle = styled.h3`
    grid-column: 2 / 4;

    @media (min-width: 768px) {
        grid-column: initial;
    }
`

export const AddProdCartStyle = styled.div`
    border: 1px solid black;
    width: 90px;
    height: 30px;
    display: flex;
    justify-content: space-between;

    grid-column: 2 / 3;
    grid-row: 3 / 4;

    @media (min-width: 768px) {
        grid-column: initial;
        grid-row: initial;
    }
`

export const ButtonCartProdStyle = styled.button`
    width: 20px;
    border: none;
    background-color: transparent;
    font-weight: bold;
`

export const PriceProdCartStyle = styled.span`
    grid-column: 1 / 2;
    grid-row: 3 / 4;

    @media (min-width: 768px) {
        grid-column: initial;
        grid-row: initial;
    }
`

export const ButtonDeleteStyle = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`