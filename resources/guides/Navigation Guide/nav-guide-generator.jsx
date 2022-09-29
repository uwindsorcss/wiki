import React from 'react'
import JSONData from './sitemap.json'

Object.values(JSONData).map(parent => parent.map(child => console.log(child)))

export const WikiPages = () => {
  return (
    <div className='pages-container'>
      {Object.values(JSONData).map((parent, key) => {
        return (
          <div key={key}>
            <h3>{parent[0].name}</h3>
            {parent.map((data, key) => {
              return (
                <ul key={key}>
                  <li><a href={data.loc}>{data.name}</a></li>
                </ul>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <WikiPages />
    </div>
  )
}

export default App;