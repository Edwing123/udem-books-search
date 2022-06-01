import { styled } from '../stitches.config'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { ChangeEvent, useState } from 'react'

const SearchTermInput = styled('input', {
    display: 'inline-block',
    width: '95%',
    maxWidth: '40rem',
    padding: '$space$sm $space$md',

    fontSize: '$fontSizes$sm',
    borderRadius: '$radii$sm',
    border: 'none',
    backgroundColor: 'hsl(0, 0%, 94%)',

    '&:focus': {
        outline: 'none',
        boxShadow: 'inset 0 0 4px hsl(0, 10%, 85%)',
    },

    '&:hover': {
        backgroundColor: 'hsl(0, 0%, 92%)',
    },
})

const SearchButton = styled('button', {
    width: '5rem',
    border: 'none',

    backgroundColor: '$colors$green',
    color: '$colors$white',
    borderRadius: '$radii$sm',
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '$colors$greenDark',
    },

    '& svg': {
        transform: 'scale(1.5)',
    },
})

const SearchFormContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    gap: '$space$xsm',
})

type SearchFormProps = {
    onSearch: (searchTerm: string) => void
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchTermInputOnChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        setSearchTerm(e.target.value)
    }

    return (
        <SearchFormContainer>
            <SearchTermInput
                value={searchTerm}
                placeholder="Escribe algo..."
                onChange={handleSearchTermInputOnChange}
            />
            <SearchButton
                onClick={() => onSearch(searchTerm)}
                aria-label="Buscar libros"
                title="Buscar libros"
            >
                <MagnifyingGlassIcon aria-hidden="true" />
            </SearchButton>
        </SearchFormContainer>
    )
}

export default SearchForm
