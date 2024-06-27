import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingContent = styled.span`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    color: #fff;
    left: -100px;
    box-sizing: border-box;
    animation: shadowRolling 2s linear infinite;

    @keyframes shadowRolling {
        0% {
            box-shadow:
                0px 0 rgba(255, 255, 255, 0),
                0px 0 rgba(255, 255, 255, 0),
                0px 0 rgba(255, 255, 255, 0),
                0px 0 rgba(255, 255, 255, 0);
        }
        12% {
            box-shadow:
                100px 0 white,
                0px 0 rgba(255, 255, 255, 0),
                0px 0 rgba(255, 255, 255, 0),
                0px 0 rgba(255, 255, 255, 0);
        }
        25% {
            box-shadow:
                110px 0 white,
                100px 0 white,
                0px 0 rgba(255, 255, 255, 0),
                0px 0 rgba(255, 255, 255, 0);
        }
        36% {
            box-shadow:
                120px 0 white,
                110px 0 white,
                100px 0 white,
                0px 0 rgba(255, 255, 255, 0);
        }
        50% {
            box-shadow:
                130px 0 white,
                120px 0 white,
                110px 0 white,
                100px 0 white;
        }
        62% {
            box-shadow:
                200px 0 rgba(255, 255, 255, 0),
                130px 0 white,
                120px 0 white,
                110px 0 white;
        }
        75% {
            box-shadow:
                200px 0 rgba(255, 255, 255, 0),
                200px 0 rgba(255, 255, 255, 0),
                130px 0 white,
                120px 0 white;
        }
        87% {
            box-shadow:
                200px 0 rgba(255, 255, 255, 0),
                200px 0 rgba(255, 255, 255, 0),
                200px 0 rgba(255, 255, 255, 0),
                130px 0 white;
        }
        100% {
            box-shadow:
                200px 0 rgba(255, 255, 255, 0),
                200px 0 rgba(255, 255, 255, 0),
                200px 0 rgba(255, 255, 255, 0),
                200px 0 rgba(255, 255, 255, 0);
        }
    }
`
