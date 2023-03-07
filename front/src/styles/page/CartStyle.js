import styled from "styled-components";

export const ContentCartStyle = styled.div`
    padding: 20px;
    display: grid;
    gap: 20px;
    justify-items: center;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
`