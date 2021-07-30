import { Skin } from '../definitions'
import { RackEnclosure } from './RackEnclosure'

export const racksSkin: Omit<Skin, 'id' | 'name' | 'theme'> = {
    enclosure: RackEnclosure,
}
