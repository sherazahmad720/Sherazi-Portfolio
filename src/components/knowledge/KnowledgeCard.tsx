import React from 'react'

export default function KnowledgeCard({title}: {title: string}) {
  return (
    <div className='card p-2'>
        {title}
    </div>
  )
}
