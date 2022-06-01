import { useEffect, useState } from 'react'

const useTitle = (title: string) => {
    const [text] = useState(title)

    useEffect(() => {
        document.title = `FakeBookSearch | ${text}`
    }, [text])
}

export default useTitle
