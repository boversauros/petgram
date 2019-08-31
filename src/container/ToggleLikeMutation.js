import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { FavButton } from '../components/FavButton'

const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input){
      id
      liked
      likes
    }
  }
`

export const ToggleLike = ({ id, liked, likes }) => {
  const [toggleLike] = useMutation(LIKE_PHOTO, { variables: { input: { id } } })
  const handleFavClick = () => toggleLike()

  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
}
