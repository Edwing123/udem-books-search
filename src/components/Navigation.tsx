import { NavLink } from 'react-router-dom'
import { styled } from '../stitches.config'
import {
    HomeIcon,
    MagnifyingGlassIcon,
    InfoCircledIcon,
} from '@radix-ui/react-icons'

const Container = styled('nav', {
    display: 'flex',
    gap: '$space$sm',

    '& .active [data-link]': {
        backgroundColor: '$$backgroundColor',
    },
})

const NavigationLinkContent = styled('span', {
    display: 'flex',
    alignItems: 'center',
    gap: '$space$xsm',
    padding: '$space$xsm $space$sm',

    transition: 'all 160ms linear',
    borderRadius: '53% 47% 73% 27% / 30% 88% 12% 70%',
    fontSize: '$fontSizes$sm',

    '&:is(:hover, :focus-within)': {
        backgroundColor: '$$backgroundColor',
    },

    '&[data-link=home]': {
        $$backgroundColor: '$colors$bluePale',
        color: '$colors$blue',
    },
    '&[data-link=discover]': {
        $$backgroundColor: '$colors$greenPale',
        color: '$colors$green',
    },
})

const Navigation = () => {
    return (
        <Container className="main-navigation">
            <NavLink to="/">
                <NavigationLinkContent data-link="home">
                    <HomeIcon />
                    Inicio
                </NavigationLinkContent>
            </NavLink>

            <NavLink to="/discover">
                <NavigationLinkContent data-link="discover">
                    <MagnifyingGlassIcon />
                    Descubrir libros
                </NavigationLinkContent>
            </NavLink>
        </Container>
    )
}

export default Navigation
