import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { Mutation } from 'react-apollo'

import { useLocalStorage } from '../hooks/useLocalStorage'
import { FavButton } from '../components/FavButton'

const LIKE_PHOTO = gql`
mutation likeAnonymusPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input){
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

export const ToggleLike = ({ id, likes }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [toggleLike] = useMutation(LIKE_PHOTO, { variables: { input: { id } } })
  const handleFavClick = () => {
    !liked && toggleLike()
    setLiked(!liked)
  }

  return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
}
