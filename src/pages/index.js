import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
        query PlaylistInfoQuery {
            directus {
                playlist {
                    cover {
                        id
                        imageFile {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 175
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP]
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

  return (
    <main>
      <p>Test</p>
      {data.directus.playlist.map(pl => {
        if (!pl.cover) {
          return null
        }

        return (
          <GatsbyImage
                        image={pl.cover.imageFile.childImageSharp.gatsbyImageData}
                        style={{
                            width: "80%",
                            maxWidth: 175,
                            height: "auto",
                            borderRadius: 17.5,
                        }}
                        alt={" playlist cover"}
                    />
          )
        })
      }
    </main>
  )
}

export default IndexPage
