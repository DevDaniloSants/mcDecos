import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { CustomButton, IconButton } from './button.styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: ReactNode
    isOpen: boolean
}

const Button: React.FC<IButtonProps> = ({
    startIcon,
    children,
    isOpen,
    ...rest
}) => {
    return (
        <CustomButton {...rest} $isOpen={isOpen}>
            {startIcon && <IconButton>{startIcon}</IconButton>}
            {children}
        </CustomButton>
    )
}

export default Button
