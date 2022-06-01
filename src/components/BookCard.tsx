import { Title } from '.'
import { styled } from '../stitches.config'
import fallbackImage from '../assets/img/book-fallback-thumbnail.jpg'
import type { IVolume } from '../types'

type BookCardProps = {
    book: IVolume
}

const Card = styled('article', {
    position: 'relative',

    overflow: 'hidden',
    borderRadius: '$radii$sm',
    boxShadow: '0 0 3px hsl(0, 0%, 50%)',
    transition: 'all 160ms linear',
    cursor: 'pointer',

    '&:is(:focus, :hover)': {
        outline: 'none',
        transform: 'scale(1.1)',
    },
})

const Thumbnail = styled('img', {
    width: '100%',
    maxHeight: '200px',
    display: 'block',
    objectFit: 'cover',
})

const InformationContainer = styled('div', {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '$space$sm',

    backgroundColor: 'hsl(0, 1%, 25%)',
    color: '$white',
})

const BookCard = ({ book }: BookCardProps) => {
    const {
        volumeInfo: { title, imageLinks, previewLink },
    } = book

    const shortTitle = title.length < 40 ? title : title.substr(0, 37) + '...'
    const thumbnail =
        imageLinks != undefined ? imageLinks?.thumbnail : fallbackImage

    return (
        <Card title={title} tabIndex={0}>
            <a href={previewLink} rel="nofollow noreferrer" target="_blank">
                <Thumbnail
                    src={thumbnail}
                    width="128"
                    height="173"
                    aria-hidden="true"
                    onDragStart={(e) => e.preventDefault()}
                />
                <InformationContainer>
                    <Title as="h3" size="xsm">
                        {shortTitle}
                    </Title>
                </InformationContainer>
            </a>
        </Card>
    )
}

export default BookCard
