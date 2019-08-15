import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://petgram-api-boversauros.now.sh/categories')
      .then(({ data }) => setCategories(data))
  }, [])

  return (
    <List>
      {
        categories.map(category => <Item key={category.id} ><Category {...category} /></Item>)
      }
    </List>
  )
}
