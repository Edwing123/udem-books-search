import { useEffect, useState, Dispatch, SetStateAction } from 'react'

const useLocalStorage = (key: string): [string, Dispatch<SetStateAction<string>>] => {
    // Get saved data.
    const localStorageData = window.localStorage.getItem(key)

    const [data, setData] = useState(localStorageData != null ? localStorageData : '')

    useEffect(() => {
        window.localStorage.setItem(key, data)
    }, [data])

    return [data, setData]
}

export default useLocalStorage
