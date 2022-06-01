import {
    Title,
    SearchForm,
    BooksGrid,
    Box,
} from '../components'
import { styled } from '../stitches.config'
import { useTitle } from '../hooks'
import { getBooks } from '../services/books.api'
import type { IVolume } from '../types'
import { useState, useEffect } from 'react'

const SearchLoader = styled('div', {
    textAlign: 'center',
    fontSize: '$fontSizes$md',
    fontWeight: 'bold'
})

const Discover = () => {
    useTitle('Descubrir libros')
    const [books, setBooks] = useState<IVolume[]>([])
    const [isSearching, setIsSearching] = useState(false)

    const onSearch = async (searchTerm: string) => {
        if (searchTerm.trim() == '') {
            return
        }

        setIsSearching(true)
        const data = await getBooks(searchTerm)

        if (data.totalItems > 0) {
            setBooks(data.items)
        } else {
            setBooks([])
        }

        setIsSearching(false)
    }

    useEffect(() => {
        onSearch('programacion')
    }, [])

    const booksSearchResult = books.length > 0 ? (
        <BooksGrid books={books} />
    ) : (
        <Title as="h2" size="md" alignment="center">
            No hay resultados...
        </Title>
    )

    return (
        <section className="page">
            <Box css={{ marginBottom: '8rem' }}>
                <Title alignment="center" css={{ marginBottom: '$space$xl' }}>
                    Descubre nuevas experiencias
                </Title>

                <SearchForm onSearch={onSearch} />
            </Box>

            <Box>
                {isSearching ? <SearchLoader>Buscando...</SearchLoader> : booksSearchResult}
            </Box>
        </section>
    )
}

export default Discover
