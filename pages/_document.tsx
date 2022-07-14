import {Html, Head, Main, NextScript} from 'next/document'

export default function Document(props: object) {
    console.log(props)
    return (
        <Html>
            <Head />
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}