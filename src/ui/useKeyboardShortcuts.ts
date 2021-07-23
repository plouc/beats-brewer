import { useEffect, useCallback, useReducer } from 'react'

const blacklistedTargets = ['INPUT', 'TEXTAREA']

const keysReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'set-key-down':
            const keydownState = { ...state, [action.key]: true }
            return keydownState
        case 'set-key-up':
            const keyUpState = { ...state, [action.key]: false }
            return keyUpState
        case 'reset-keys':
            const resetState = { ...action.data }
            return resetState
        default:
            return state
    }
}

export const useKeyboardShortcut = (
    shortcutKeys: string[],
    callback: (keys: string[]) => void,
    options: any = {}
) => {
    if (!Array.isArray(shortcutKeys))
        throw new Error(
            'The first parameter to `useKeyboardShortcut` must be an ordered array of `KeyboardEvent.key` strings.'
        )

    if (!shortcutKeys.length)
        throw new Error(
            'The first parameter to `useKeyboardShortcut` must contain atleast one `KeyboardEvent.key` string.'
        )

    if (!callback || typeof callback !== 'function')
        throw new Error(
            'The second parameter to `useKeyboardShortcut` must be a function that will be envoked when the keys are pressed.'
        )

    const { overrideSystem } = options || {}
    const initalKeyMapping = shortcutKeys.reduce((currentKeys: any, key) => {
        currentKeys[key.toLowerCase()] = false
        return currentKeys
    }, {})

    const [keys, setKeys] = useReducer(keysReducer, initalKeyMapping)

    const keydownListener = useCallback(
        (assignedKey) => (keydownEvent: KeyboardEvent) => {
            const loweredKey = assignedKey.toLowerCase()

            if (keydownEvent.repeat) return
            // if (blacklistedTargets.includes(keydownEvent.target.tagName)) return;
            if (loweredKey !== keydownEvent.key.toLowerCase()) return
            if (keys[loweredKey] === undefined) return

            if (overrideSystem) {
                keydownEvent.preventDefault()
                keydownEvent.stopPropagation()
            }

            setKeys({ type: 'set-key-down', key: loweredKey })
            return false
        },
        [keys, overrideSystem]
    )

    const keyupListener = useCallback(
        (assignedKey) => (keyupEvent: KeyboardEvent) => {
            const raisedKey = assignedKey.toLowerCase()

            // if (blacklistedTargets.includes(keyupEvent.target.tagName)) return;
            if (keyupEvent.key.toLowerCase() !== raisedKey) return
            if (keys[raisedKey] === undefined) return

            if (overrideSystem) {
                keyupEvent.preventDefault()
                keyupEvent.stopPropagation()
            }

            setKeys({ type: 'set-key-up', key: raisedKey })
            return false
        },
        [keys, overrideSystem]
    )

    useEffect(() => {
        if (!Object.values(keys).filter((value) => !value).length) {
            callback(keys)
            setKeys({ type: 'reset-keys', data: initalKeyMapping })
        } else {
            setKeys({ type: null })
        }
    }, [callback, keys])

    useEffect(() => {
        shortcutKeys.forEach((k) => window.addEventListener('keydown', keydownListener(k)))
        return () =>
            shortcutKeys.forEach((k) => window.removeEventListener('keydown', keydownListener(k)))
    }, [])

    useEffect(() => {
        shortcutKeys.forEach((k) => window.addEventListener('keyup', keyupListener(k)))
        return () =>
            shortcutKeys.forEach((k) => window.removeEventListener('keyup', keyupListener(k)))
    }, [])
}
