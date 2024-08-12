import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-content: center;
    position: relative;

    grid-gap: 14px;
    padding-bottom: 14px;

    & span {
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.4em;
    }

    @media (max-width: 647px) {
        grid-template-columns: 1fr;
        grid-gap: 4px;
        padding-bottom: 4px;
    }
`
