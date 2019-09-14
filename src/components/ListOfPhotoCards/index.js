import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComp = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
