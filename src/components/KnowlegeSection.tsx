
import React from 'react'
import KnowledgeCard from './knowledge/KnowledgeCard'

export default function KnowlegeSection() {
  return (
    <div className=' flex flex-wrap gap-2'>
        <KnowledgeCard title={'Flutter'}/>
        <KnowledgeCard title={'Dart'}/>
        <KnowledgeCard title={'Node Js'}/>
        <KnowledgeCard title={'Next Js'}/>
        <KnowledgeCard title={'Figma'}/>
        <KnowledgeCard title={'APIs Integration & Building'}/>
        <KnowledgeCard title={'Git & Github'}/>
        <KnowledgeCard title={'Version Controll'}/>
        <KnowledgeCard title={'Responsive Design'}/>
        <KnowledgeCard title={'Cloud Function'}/>
        <KnowledgeCard title={'Firebase'}/>
        <KnowledgeCard title={'Push Notification'}/>
        <KnowledgeCard title={'Deep/Dynamic/App Links'}/>
        <KnowledgeCard title={'App Store & Play Store Deployment'}/>
        <KnowledgeCard title={'CI/CD'}/>

       
    </div>
  )
}
