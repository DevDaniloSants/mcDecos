import styled from 'styled-components'

export const Container = styled.div<{ $background?: string }>`
    width: 100%;
    display: flex;
    height: 100%;
    max-height: 200px;
    background-image: url(${(props) => props.$background});
    background-repeat: repeat;
    filter: grayscale(1);
    background-size: 500px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: inset 0px -80px 82px 1px rgba(0, 0, 0, 0.76);
    margin-bottom: 1rem;

    & > * {
        z-index: 10;
        position: relative;
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        opacity: 90%;
        z-index: 0;
    }
`

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 20px;
    bottom: 10px;
`

export const Title = styled.h1`
    font-size: clamp(78px, 10vw, 100px);
`
