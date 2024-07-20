import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { CustomButton, IconButton } from './button.styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: ReactNode
}

const Button: React.FC<IButtonProps> = ({ startIcon, children, ...rest }) => {
    return (
        <CustomButton {...rest}>
            {startIcon && <IconButton>{startIcon}</IconButton>}
            {children}
        </CustomButton>
    )
}

export default Button
