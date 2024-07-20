import styled from 'styled-components'
import Colors from '../../colors/theme.colors'

export const Container = styled.div`
    display: flex;
    text-align: left;
    gap: 8px;
    padding: 0.5rem;
`
export const Informations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: hidden;
`
export const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background-color: ${Colors.background};
    padding: 10px;
`
export const Title = styled.span`
    font-size: 14px;
    font-weight: 300;
    flex: 1;
`
export const IngredientsText = styled.div`
    font-size: 12px;
    flex: 2;
    color: ${Colors.text.gray};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    max-width: 380px;
`
export const Actions = styled.div`
    flex: 2;
`

export const Price = styled.span`
    display: flex;
    gap: 4px;
`
