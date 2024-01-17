import Link from "next/link";
import { read } from "../../lib/neo4j"
import Genre from "../../../types/genre";


interface GenreRecord {
    genre: Genre;
}

async function getData() {
    console.log('index===');
    
    const res = await read(`
        MATCH (g)
        RETURN g 
    `)

    const genres = res.map((row:any) => row.genre) || []

    return {
        props: {
            genres,
        }
    }
  }

interface GenresListProps {
    genres: Genre[];
}

export default async function GenresList() {
    const genres:any = await getData() || []
    console.log(genres);
    
    return (
        <div>
            <h1>Genres</h1>

            <ul>
                {/* {genres && genres.map((genre:any) => <li key={genre.name}>
                    <Link href={`/genres/${genre.name}`}>{genre.name} ({genre.movies})</Link>
                </li>)} */}
            </ul>
        </div>
    )
}
