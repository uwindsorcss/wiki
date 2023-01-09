import React from 'react'
import JSONData from './sitemap.json'

export const WikiPages = () => {
  return (
    <div className='pages-container'>
      {Object.values(JSONData).map((header, index) => {
        if (header[0] != undefined) { // checks to see that if the header page contains subpages or not
          return ( // lists subpages of header page 
            <div key={index}>
              <h3>{header[0].name}</h3>
              {header.map((data, index) => {
                return (
                  <ul key={index}>
                    <li><a href={data.loc}>{data.name}</a></li> 
                  </ul>
                )
              })}
            </div>
          )
        }
        else { 
          console.log(Object.keys(JSONData)[index] + " isn't available")
          return ( // renders if subpages aren't available for certain header page
            <div key={index}>
              <h3>No pages available for {Object.keys(JSONData)[index]}</h3> 
            </div>  
          )
        }
      })}
    </div>
  )
}

export default WikiPages;