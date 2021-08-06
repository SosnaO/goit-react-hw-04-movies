

export default function MoviesPage(){
    return(
        <form>
            <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
            // value={query}
            // onChange={handleChange}
            />
            <button type="submit" className="button_label">
            <span>Search</span>
                </button>
        </form>
       

    )

         
  
}

