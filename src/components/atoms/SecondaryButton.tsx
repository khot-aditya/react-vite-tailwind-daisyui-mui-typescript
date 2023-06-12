import React from 'react'

interface Props {
    children: React.ReactNode,
    classes?: string,
    onClick?: () => void,
    disabled?: boolean
}
const SecondaryButton = ({
    children,
    classes,
    onClick,
    disabled
}: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-secondary normal-case text-primary no-animation ${classes}`}>
            {children}
        </button>
    )
}

export default SecondaryButton
