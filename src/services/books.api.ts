import type { IBooksData } from '../types'

const ROOT_URL = 'https://www.googleapis.com/books/v1'

const endpoints = {
    volumes: 'volumes',
}

const volumesLimit = 'startIndex=0&maxResults=20'

const createVolumeURL = (searchTerm: string) => {
    searchTerm = encodeURIComponent(searchTerm)
    return `${ROOT_URL}/${endpoints.volumes}?q=${searchTerm}&${volumesLimit}`
}

export const getBooks = async (searchTerm: string) => {
    const url = createVolumeURL(searchTerm)
    const response = await fetch(url)
    const data = (await response.json()) as IBooksData

    return data
}
