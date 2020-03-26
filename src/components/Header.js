import React from "react"
import { StaticQuery, graphql } from 'gatsby'

const TitleDescrition = ({data}) => {
    const title = data.site.siteMetadata.title;
    const description = data.site.siteMetadata.description;
  
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'avenir'
      }}>
        <h2 style={{marginBottom: 0}}>{ title }</h2>
        <p style={{
          marginTop: 0,
          opacity: 0.6,
        }}>{ description }</p>
      </div>
    );
  }
  
  const Header = () => {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
      `}
      render = {data => <TitleDescrition data={data} />}
      />
    );
  }

  export default Header;