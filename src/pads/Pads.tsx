import styled from 'styled-components'
import { Pad } from './Pad'
import { PadIndex, PadsConfig } from './definitions'
import { PAD_INDEXES, PAD_SIZE, PAD_GUTTER } from './constants'

interface PadsProps {
    config: PadsConfig
    isEditing?: boolean
    onClick: (padIndex: PadIndex) => void
}

export const Pads = ({ config, isEditing = false, onClick }: PadsProps) => {
    return (
        <Grid>
            {PAD_INDEXES.map((padIndex) => {
                const padConfig = config.pads[padIndex]
                if (!padConfig) {
                    return null
                }

                return (
                    <Pad
                        key={padConfig.index}
                        pad={padConfig}
                        isEditing={isEditing}
                        onClick={onClick}
                    />
                )
            })}
        </Grid>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, ${PAD_SIZE}px);
    grid-template-rows: repeat(4, ${PAD_SIZE}px);
    grid-gap: ${PAD_GUTTER}px;
    padding: 9px;
`
