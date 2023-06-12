import React from 'react'

interface Props {
    children: React.ReactNode,
    classes?: string,
    onClick?: () => void,
    disabled?: boolean
}
const DefaultButton = ({
    children,
    classes,
    onClick,
    disabled
}: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn normal-case text-black no-animation ${classes}`}>
            {children}
        </button>
    )
}

export default DefaultButton
