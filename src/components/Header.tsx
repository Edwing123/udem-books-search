import { styled } from '../stitches.config'
import { Navigation } from '.'

const StyledHeader = styled('header', {
    display: 'flex',
    alignItems: 'center',
    padding: '$space$sm $space$lg',
    marginBottom: '$space$lg',

    boxShadow: '$shadows$sm',
    borderRadius: '$radii$sm',
    backgroundColor: '$colors$sectionsBackgroundColor',

    '@xsm': {
        display: 'block'
    }
})

const PageLogo = styled('a', {
    marginInlineEnd: '$space$xl',
    fontSize: '$fontSizes$sm',
    color: '#363062',
    fontWeight: 'bold',

    '@xsm': {
        display: 'inline-block',
        marginBottom: '$space$md',
    }
})

const Header = () => {
    return (
        <StyledHeader className="header">
            <PageLogo href="/">
                FakeBookSearch
            </PageLogo>
            <Navigation />
        </StyledHeader>
    )
}

export default Header
