import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function Details() {
  const [comic, setComic] = useState(null)

  const {
    query: {
      id
    }
  } = useRouter()

    useEffect(() => {
    async function getComic() {
      const resp = await fetch(`https://fake-comic-api.herokuapp.com/comic/${id}`)
      setComic(await resp.json())
    }

    if (id) {
      getComic()
    }
    }, [id])
  
  if (!comic) {
    return null
  }

  return (
    <div>
      <Head>
        <title>{comic.title} | CSR- Comic books</title>
        <meta name="description" content={`${comic.title} | CSR - comic book study`} />
      </Head>

      <div className="container">
        <Link href="/">
          <a>Back to Home</a>
        </Link>

        <div className="detail">
          <img src={comic.imageSrc} alt={comic.title} />
          
          <div className="information">
            <h2>{comic.title}</h2>
            
            <p>
              {comic.description}
            </p>

            <div>
              <span>
                <p>Ratings:</p>
                <p>{comic.ratings}</p>
              </span>

              <span>
                <p>Price:</p>
                <p>{comic.price}</p>
              </span>  
              
              <span>
                <p>Published:</p>
                <p>{comic.publicationDate}</p>
              </span>

              <h2>Author</h2>

              <span>
                <p>Writer:</p>
                <p>{comic.team.writer}</p>
              </span>

              <span>
                <p>Penciler:</p>
                <p>{comic.team.penciler}</p>
              </span>

              <span>
                <p>Inker:</p>
                <p>{comic.team.inker}</p>
              </span>
              
              <span>
                <p>Editor:</p>
                <p>{comic.team.editor}</p>
              </span>
              
              <span>
                <p>Letterer:</p>
                <p>{comic.team.letterer}</p>
              </span>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
