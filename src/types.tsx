type IVolumeInfo = {
    title: string
    imageLinks?: {
        thumbnail: string
    }
    previewLink: string
}

export type IVolume = {
    id: string
    volumeInfo: IVolumeInfo
}

export type IBooksData = {
    items: IVolume[]
    totalItems: number
}
