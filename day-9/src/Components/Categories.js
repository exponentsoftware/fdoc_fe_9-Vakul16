import React from 'react'
import Playlists from './Playlists'

const Categories = () => {
  const dataCategories = [
    {
      id: 1,
      name: 'Top 50',
      tagline: 'The hottest tracks in India',
    },
    {
      id: 2,
      name: 'Top Hits Telugu',
      tagline: 'Tune into the hottest Telugu songs',
    },
    {
      id: 3,
      name: 'Top Hits Tamil',
      tagline: 'Tune into the hottest Tamil songs',
    },
    {
      id: 4,
      name: 'Top Hits Hindi',
      tagline: 'Tune into the hottest Hindi songs',
    },
  ]
  return (
    <div className="mainInner">
      {dataCategories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <h2>{category.name}</h2>
          <span className="seeAll">
              <h1>LIST OF SONGS</h1>
            </span>
          <p className="subText">{category.tagline}</p>
          <Playlists category_id={category.id} />
        </div>
      ))}
    </div>
  )
}

export default Categories