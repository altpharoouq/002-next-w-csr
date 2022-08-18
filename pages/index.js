import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const [comic, setComic] = useState([])

  useEffect(() => {
    async function getComic() {
      const resp = await fetch('https://fake-comic-api.herokuapp.com/comic')
      setComic(await resp.json())
    }

    getComic()
  }, [])

  return (
    <div>
      <Head>
        <title>CSR- Comic books</title>
        <meta name="description" content="CSR - comic book study" />
      </Head>

      <div className="container">
        <h2>Comic List</h2>

        <div className="grid">
          {
            comic.map((comic) => (
              <div className="card" key={comic.id}>
                <Link href={`/comic/${comic.id}`}>
                  <a>
                    <img src={comic.imageSrc} alt={comic.title} />
                    <h4>{comic.title}</h4>
                  </a>
                </Link>
              </div>
            ))
          }
        </div>        
      </div>
    </div>
  )
}
