import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { Mutation } from 'react-apollo'
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

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={LIKE_PHOTO}>
    {children}
  </Mutation>
}

export const ToggleLike = ({ id, liked, likes }) => {
  const [toggleLike] = useMutation(LIKE_PHOTO, { variables: { input: { id } } })
  const handleFavClick = () => toggleLike()

  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
}
