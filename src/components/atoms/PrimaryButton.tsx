import React from 'react'

interface Props {
    children: React.ReactNode,
    classes?: string,
    onClick?: () => void,
    disabled?: boolean
}
const PrimaryButton = ({
    children,
    classes,
    onClick,
    disabled
}: Props) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn btn-primary normal-case text-white no-animation ${classes}`}>
            {children}
        </button>
    )
}

export default PrimaryButton
