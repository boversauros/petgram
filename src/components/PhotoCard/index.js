import React, { Fragment } from 'react'
import { useNearScreen } from '../../hooks/useNearScreen'
import { ToggleLike } from '../../container/ToggleLikeMutation'
import { ImgWrapper, Img, Article } from './styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show && <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <ToggleLike id={id} likes={likes} />
        </Fragment>
      }
    </Article>
  )
}
