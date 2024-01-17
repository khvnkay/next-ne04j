"use client"

import { useEffect, useState } from "react";

interface GenreMovieListProps {
  genre: any;
}

export default function GenreMovieList({ genre }: GenreMovieListProps) {
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(10)
  const [movies, setMovies] = useState<any[]>([])
  const [total, setTotal] = useState<number>(2)

  // Get data from the API
  useEffect(() => {
    fetch(`/api/genres/acat/movies?page=${page}&limit=${limit}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        
        setMovies(json.data)
        setTotal(json.total)
      })

  }, [genre, page, limit])


  // Loading State
  if (!movies || !total) {
    return <div>Loading...</div>
  }
  console.log(movies, "movies");
  

  return (
    <div>
      <ul>
        {movies.map((movie:any) => <li key={movie?.m?.properties?.name}>{movie?.m?.properties?.name}</li>)}
      </ul>

      <p>Showing page {page}</p>

      {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
      {page * limit < total && <button onClick={() => setPage(page + 1)}>Next</button>}
    </div>
  )
}
