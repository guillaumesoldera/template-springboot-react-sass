import React, { useEffect, useRef } from 'react';
import '@clevercloud/components/dist/atoms/cc-button'

export function MyButton(props) {
    const wrappedButton = useRef(null)
    useEffect(() => {
        wrappedButton.current.addEventListener('cc-button:click', props.onClick)
        // Remove event listener on cleanup
        return () => {
            console.log("remove")
            wrappedButton.current.removeEventListener('cc-button:click', props.onClick)
        }
    }, []) // return an empty array to have useEffect played once
    return (
        <cc-button ref={wrappedButton} primary>{props.label}</cc-button>
    )
}