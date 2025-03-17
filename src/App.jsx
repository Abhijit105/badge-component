import BadgeList from './components/BadgeList'

function App() {
  return (
    <div className='container flex flex-col gap-4 items-center justify-center mx-auto my-32'>
      <BadgeList
        colorClassName={
          'bg-gray-50 border-neutral-200 border-1 text-neutral-600'
        }
      />
      <BadgeList
        colorClassName={'bg-red-50 border-red-200 border-1 text-red-600'}
      />
      <BadgeList
        colorClassName={'bg-amber-50 border-amber-200 border-1 text-amber-600'}
      />
      <BadgeList
        colorClassName={'bg-green-50 border-green-200 border-1 text-green-600'}
      />
      <BadgeList
        colorClassName={
          'bg-indigo-50 border-indigo-200 border-1 text-indigo-600'
        }
      />
    </div>
  )
}

export default App
