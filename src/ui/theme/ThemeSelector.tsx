import { ChangeEvent, useCallback } from 'react'
import { useAppStore } from '../../useApp'
import { Select } from '../controls/Select'
import { themes } from './themes'

export const ThemeSelector = () => {
    const currentTheme = useAppStore((state) => state.theme)
    const setTheme = useAppStore((state) => state.setTheme)
    const handleSelect = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            const newTheme = themes.find((t) => t.id === event.target.value)
            if (newTheme !== undefined) {
                setTheme(newTheme)
            }
        },
        [setTheme]
    )

    return (
        <Select value={currentTheme.id} onChange={handleSelect}>
            {themes.map((theme) => (
                <option key={theme.id} value={theme.id}>
                    {theme.name}
                </option>
            ))}
        </Select>
    )
}
