import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import Button from "@material-ui/core/Button";
import "./Search.css";
import SearchResults from './SearchResults.';


function Search() {
    const [input, setInput] = useState("");
    const [showResult, setShowResult] = useState(false)

    const search = (e) => {
      e.preventDefault();
     console.log("You clicked the search button", input)
     setShowResult(true)
     //If you wana toggle the result  then replace true with !showResult.
    };
    


    return (
        <form className="search">
            <div className="search__input">
              <SearchIcon className="search__inputIcon" />
              <input value={input} onChange={e => setInput(e.target.value)} />
              <MicIcon className="search__micIcon" />
            </div> 
            <div  >
            <div className="search__button">
              <Button
                variant="outlined"
                type="submit"
                onClick={search}
              >
                  Search
              </Button>
             
            </div>
            <div className="search__Result">
            {showResult && <SearchResults/>}
            </div>           
            </div> 
        </form>
       
    )
}

export default Search;
