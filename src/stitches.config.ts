import { createStitches } from '@stitches/react'

export const { styled, globalCss, css } = createStitches({
    media: {
        md: '(width <= 900px)',
        sm: '(width <= 700px)',
        xsm: '(width <= 550px)',
        superxsm: '(width <= 300px)',
    },

    theme: {
        colors: {
            blue: '#5800FF',
            bluePale: '#eee6ff',
            green: '#36AE7C',
            greenDark: '#319d70',
            greenPale: '#ebf7f2',
            white: 'hsl(0, 0%, 97%)',

            categoryPillBackgroundColor: 'hsl(0, 0%, 92%)',
            activeCategoryPillBackgroundColor: '#A760FF',
            bodyBackgroundColor: '#D8DEE9',
            activeNavigationLink: 'hsl(0, 0%, 90%)',
            sectionsBackgroundColor: '$white',
            homeDiscoverButtonBackgroundColor: '$blue',
            homeDiscoverButtonColor: '$white'
        },

        radii: {
            sm: '0.3rem',
            md: '0.8rem',
            pill: '10rem',
        },

        fontSizes: {
            root: '62.50%',
            xsm: '1.4rem',
            sm: '1.8rem',
            md: '2rem',
            lg: '2.8rem',
        },

        fonts: {
            manrope: '"Manrope", sans-serif',
        },

        lineHeights: {
            md: 1.5,
        },

        space: {
            xsm: '0.5rem',
            sm: '1rem',
            md: '1.5rem',
            lg: '2.5rem',
            xl: '4rem',
        },

        shadows: {
            sm: '0 0.1rem 0.5rem hsla(0, 20%, 60%, 0.1)'
        }
    },
})

export const globalStyles = globalCss({
    '*, *::before, *::after': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    ':root': {
        fontSize: '$fontSizes$root',
        fontFamily: '$fonts$manrope',
        lineHeight: 1.5,
        color: '#2E3440',
    },

    'a, input, textarea, button': {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        color: 'CurrentColor',
        textDecoration: 'none',
    },

    body: {
        backgroundColor: '$colors$bodyBackgroundColor',
    },

    '.container': {
        width: '95%',
        maxWidth: '100rem',
        marginInline: 'auto',
        paddingBlock: '2rem',
    },
})
