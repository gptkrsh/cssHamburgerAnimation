import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{
				margin: 0,
				padding: 0,
				boxSizing: 'border-box',
				overflow: 'hidden'
			}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
