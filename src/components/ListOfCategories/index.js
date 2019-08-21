import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Category } from '../Category'
import { List, Item } from './styles'
import { Loader } from '../../styles/GlobalComponents'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://petgram-api-boversauros.now.sh/categories')
      .then(({ data }) => {
        setCategories(data)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const isShowFixed = window.scrollY > 200
      setShowFixed(isShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const RenderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Loader key='loading' />
          : categories.map(category => <Item key={category.id} ><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <Fragment>
      {RenderList()}
      {showFixed && RenderList(true)}
    </Fragment>
  )
}
