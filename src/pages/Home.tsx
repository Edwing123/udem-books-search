import { Link } from 'react-router-dom'
import { styled, css } from '../stitches.config'
import { Title, Grid, Box } from '../components'
import { useTitle } from '../hooks'
import heroImage from '../assets/img/home-hero.jpg'

const HeroImage = styled('img', {
    width: '100%',
    height: '50mvw',
    maxHeight: '400px',
    objectFit: 'cover',
})

const Paragraph = styled('p', {
    fontSize: '$fontSizes$sm',
})

const discoverButtonStyles = css({
    display: 'inline-block',
    padding: '$space$sm $space$lg',

    borderRadius: '$radii$sm',
    color: '$colors$homeDiscoverButtonColor',
    backgroundColor: '$colors$homeDiscoverButtonBackgroundColor',
    fontSize: '$fontSizes$md',
})()

const DiscoverButtonSection = () => {
    return (
        <Box css={{ textAlign: 'center', marginBottom: '$space$xl' }}>
            <Link to="/discover" className={discoverButtonStyles}>
                Descubre libros 🔥🌀
            </Link>
        </Box>
    )
}

const HeroSection = () => {
    return (
        <div className="hero">
            <Title css={{ marginBottom: '$space$md' }}>
                Bienvenido a FakeBookSearch :)
            </Title>

            <HeroImage aria-hidden="true" onDragStart={(e) => e.preventDefault()} src={heroImage} />
        </div>
    )
}

const Card = styled('article', {
    '@sm': {
        marginBottom: '$space$xl'
    }
})

const InformationCardsSection = () => {
    return (
        <Grid
            childCount={{
                '@initial': 3,
                '@sm': 1,
            }}
            css={{ columnGap: '$space$xl', margin: '$space$xl 0 7rem' }}
        >
            <Card>
                <Title as="h2" size="md" css={{ marginBottom: '$space$sm' }}>
                    Descubre nuevas experiencias
                </Title>
                <Paragraph>
                    Aca podras encontrar miles de libros de muchas categorias.
                </Paragraph>
            </Card>

            <Card>
                <Title as="h2" size="md" css={{ marginBottom: '$space$sm' }}>
                    respaldados por Google Books API
                </Title>
                <Paragraph>
                    La informacion de los libros se obtiene usando la API
                    de Google "Google Books API".
                </Paragraph>
            </Card>

            <Card>
                <Title as="h2" size="md" css={{ marginBottom: '$space$sm' }}>
                    Interfaz de usuario bonita
                </Title>
                <Paragraph>
                    El diseño de la aplicacion web es bonito.
                </Paragraph>
            </Card>
        </Grid>
    )
}

const Home = () => {
    useTitle('Inicio')

    return (
        <section className="page">
            <HeroSection />
            <InformationCardsSection />
            <DiscoverButtonSection />
        </section>
    )
}

export default Home
