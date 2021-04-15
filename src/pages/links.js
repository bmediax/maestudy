import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../layout'
import LinkHeader from '../components/Links/LinkHeader/LinkHeader'
// import LinkLatestVideo from '../components/Links/LinkLatestVideo'
import LinkModule from "../components/Links/LinkModule.js"
import LinkBtmBannerModule from '../components/Links/LinkBtmBannerModule'

// markup
const Links = ({ data }) => {
  if (!data) return null

  const document  = data.allPrismicLinks.edges[0].node.data

  const linksContent = {
    bannerImage: document.banner,
    profileImage: document.profile_image,
    linksModule: document.links_module,
    bottomModule: document.bottom_module
  }
  return (
    <Layout title="Mae Study Links" ade="links">
      <LinkHeader 
        bannerImage={linksContent.bannerImage} 
        profileImage={linksContent.profileImage}/>
      {/* <LinkLatestVideo /> */}
      <LinkModule linksModule={linksContent.linksModule} />
      <LinkBtmBannerModule bottomModule={linksContent.bottomModule} />
    </Layout>
  )
}

export default Links

export const query = graphql`
  query linksQuery {
    allPrismicLinks {
      edges {
        node {
          data {
            banner {
              alt
              url
            }
            profile_image {
              alt
              url
              fluid(maxWidth: 600) {
                src
              }
            }
            links_module {
              is_pinned
              links_title {
                raw
              }
              links_url {
                raw
                url
              }
            }
            bottom_module {
              title {
                raw
              }
              url {
                url
              }
            }
          }
        }
      }
    }
  }
`