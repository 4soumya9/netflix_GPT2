import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
         src={BG_URL}
          alt="Logo"
        />
      </div>
      
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch

// GPTSearch MEANS gptsearch page 