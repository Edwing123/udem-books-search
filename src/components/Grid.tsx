import { styled } from '../stitches.config'

const Grid = styled('div', {
    display: 'grid',

    variants: {
        childCount: {
            1: { gridTemplateColumns: 'repeat(1, 1fr)' },
            2: { gridTemplateColumns: 'repeat(2, 1fr)' },
            3: { gridTemplateColumns: 'repeat(3, 1fr)' },
            4: { gridTemplateColumns: 'repeat(4, 1fr)' },
            5: { gridTemplateColumns: 'repeat(5, 1fr)' },
        },
    },
})

export default Grid
