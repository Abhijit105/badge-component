import Badge from '../common/Badge'

function BadgeList({ colorClassName }) {
  return (
    <div className='flex flex-row items-center justify-center flex-wrap gap-8'>
      <Badge
        colorClassName={colorClassName}
        layoutAndTextClassName={'py-1 px-2 rounded-4xl text-sm'}
        text={'Label'}
      />
      <Badge
        colorClassName={colorClassName}
        layoutAndTextClassName={'py-2 px-4 rounded-4xl text-md'}
        text={'Label'}
      />
      <Badge
        colorClassName={colorClassName}
        layoutAndTextClassName={'py-4 px-8 rounded-4xl text-lg'}
        text={'Label'}
      />
    </div>
  )
}

export default BadgeList
