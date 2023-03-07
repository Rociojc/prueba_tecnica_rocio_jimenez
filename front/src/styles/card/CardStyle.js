import styled from "styled-components";

export const ArticleStyle = styled.article`
    border: 1px solid #f5f6fa;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    display: grid;
    gap: 10px;
    cursor: pointer;
    transition: all 500ms ease-out;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
    }
`

export const ImgCardStyle = styled.img`
    border-radius: 10px;
`