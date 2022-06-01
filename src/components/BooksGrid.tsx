import { Box, Title, Grid, BookCard } from '.'
import type { IVolume } from '../types'

type BooksGridProps = {
    books: IVolume[]
}

const BooksGrid = ({ books }: BooksGridProps) => {
    const booksCount = books.length

    return (
        <Box>
            <Title as="h2" size="md" css={{ marginBottom: '$space$lg' }}>
                Resultados ({booksCount})
            </Title>

            <Grid
                childCount={{
                    '@initial': 5,
                    '@md': 4,
                    '@sm': 3,
                    '@xsm': 2,
                    '@superxsm': 1,
                }}
                css={{ gap: '$space$lg' }}
            >
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </Grid>
        </Box>
    )
}

export default BooksGrid
