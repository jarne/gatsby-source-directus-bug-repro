exports.createPages = async ({
    graphql,
    actions: { createPage },
    reporter,
}) => {
    const res = await graphql(`
    query OtherPlaylistInfoQuery {
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

    console.log(res) // Test
}
