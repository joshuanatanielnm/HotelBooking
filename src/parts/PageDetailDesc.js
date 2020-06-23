import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function PageDetailDesc({data}) {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{marginTop: 30}}>
        {data.features.map((features, index) => {
          return(
            <div key={`features-${index}`}>

            </div>
          )
        })}
      </div>

    </main>
  )
}
