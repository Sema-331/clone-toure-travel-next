"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

interface Int {
    setSearchQuery: any
    onSearch: any
}

const AAA = ({setSearchQuery, onSearch}: Int) => {

  return (
    <>
    <form className="flex justify-center w-2/3">
    <>
    <>
      <button onClick={() => setSearchQuery('160')}>CLICK</button>
    </>
      <>{/* <input
        style={{border: '1px solid red'}}
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="What are you looking for?"
      />
      <input
        style={{border: '1px solid red'}}
        value={searchQueryVariaty || ""}
        onChange={(event) => setSearchQueryVariaty(event.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="What are you looking for?"
      />
      <input
        style={{border: '1px solid red'}}
        value={stateSearch || ""}
        onChange={(event) => setStateSearch(event.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="What are you looking for?"
      /> */}
      {/* <button type='submit'>submit</button>
    </form> */}
    
    </>
    </>
    </form>
    <form action="">
        {/* <button onClick={handleAddParam} style={{border: '1px solid pink'}}>WINDOW</button> */}
    </form>
    </>
  )
}

export default AAA