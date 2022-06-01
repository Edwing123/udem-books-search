import { globalStyles, styled } from './stitches.config'
import { Header } from './components'
import { Home, Discover } from './pages'
import { Routes, Route } from 'react-router-dom'

const StyledMain = styled('main', {
    padding: '$space$lg',

    boxShadow: '$shadows$sm',
    borderRadius: '$radii$sm',
    backgroundColor: '$sectionsBackgroundColor'
})

const FooterDescription = styled('p', {
    marginTop: '2rem',

    textAlign: 'center',
    fontSize: '$fontSizes$xsm',
})

const App = () => {
    globalStyles()

    return (
        <>
            <Header />

            <StyledMain className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/about" element={<Home />} />
                </Routes>
            </StyledMain>

            <footer className="footer">
                <FooterDescription>Aplicacion Web Creada por Edwing123.</FooterDescription>
            </footer>
        </>
    )
}

export default App
