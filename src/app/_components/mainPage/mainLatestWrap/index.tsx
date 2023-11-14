import React from 'react'
import LatestWrapTitle from '../latestWrapTitle'
import LatestWrapList from '../latestWrapList'
import LatestWrapButton from '../latestWrapButton'

interface Props {
  title: string,
  // list : object,
  button : string
}

const MainLatestWrap:React.FC<Props> = ({title,button}) => {
  return (
    <div className='border-stone-300 border-[1px] w-11/12 bg-white m-auto rounded-xl overflow-hidden mt-[30px] mb-[30px]'>
      <LatestWrapTitle title={title} />
      <LatestWrapList />
      {/* <LatestWrapList list= {list} /> */}
      <LatestWrapButton button={button} />
    </div>
  )
}

export default MainLatestWrap