import styled from 'styled-components'

const ColorInputLabel = styled.label`
    vertical-align: text-bottom;
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    cursor: pointer;

    input {
        visibility: hidden;
    }
`

export const ColorInput = (props: any) => {
    const color = props.value || '#000'
    const id = props.id || 'ColorInput'

    return (
        <ColorInputLabel htmlFor={id} style={{ backgroundColor: color }}>
            <input type="color" id={id} {...props} />
        </ColorInputLabel>
    )
}
