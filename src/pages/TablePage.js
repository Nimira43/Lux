import React from 'react'
import SortableTable from '../components/SortableTable'
import { fruitsData } from '../data/appData'

const config = [
  {
    label: 'Name',
    render: (fruit) => fruit.name,
    sortValue: (fruit) => fruit.name
  },
  {
    label: 'Colour',
    render: (fruit) => (
      <div className={`p-3 m-2 ${fruit.colour}`} />
    )
  },
  {
    label: 'Score',
    render: (fruit) => fruit.score,
    sortValue: (fruit) => fruit.score
  },
]

const keyFn = (fruit) => {
  return fruit.name
}

function TablePage() { 
  return (
    <div>
      <SortableTable
        data={fruitsData }
        config={config}
        keyFn={keyFn}
      />
    </div>
  )
}

export default TablePage