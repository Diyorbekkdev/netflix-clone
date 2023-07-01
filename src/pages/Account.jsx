import React, { Fragment } from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <Fragment>
       <div className="w-full text-white ">
       <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/aafcc197-cd3b-4540-b131-1e5eae0e12b4/UZ-en-20230619-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
            <div className="absolute top-[20%] p-4 md:p-8">
                <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
            </div>
        </div>
       </div>
       <SavedShows/>
    </Fragment>
  )
}

export default Account