import { styled } from '../stitches.config'

const Title = styled('h1', {
    variants: {
        size: {
            xsm: {
                fontSize: '$fontSizes$xsm',
            },
            sm: {
                fontSize: '$fontSizes$sm',
            },
            md: {
                fontSize: '$fontSizes$md',
            },
            lg: {
                fontSize: '$fontSizes$lg',
            },
        },

        alignment: {
            left: {
                textAlign: 'left',
            },
            center: {
                textAlign: 'center',
            },
            right: {
                textAlign: 'right',
            },
        },
    },

    defaultVariants: {
        size: 'lg',
        alignment: 'left',
    },
})

export default Title
