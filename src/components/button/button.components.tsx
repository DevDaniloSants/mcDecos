import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { CustomButton, IconButton } from './button.styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLBodyElement> {
    startIcon?: ReactNode
}

const Button: React.FC<IButtonProps> = ({ startIcon, children }) => {
    return (
        <CustomButton>
            {startIcon && <IconButton>{startIcon}</IconButton>}
            {children}
        </CustomButton>
    )
}

export default Button
