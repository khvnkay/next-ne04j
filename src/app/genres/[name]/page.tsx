"use server";
import { int } from 'neo4j-driver'
import Link from 'next/link';
import GenresList from '../page';
import { read } from "../../../lib/neo4j";
import GenreMovieList from '../../../../lib/components/genre/movie-list';

interface GenreDetailsServerSideProps {
    params: {
        name: string;
    },
    query: {
        page?: string;
    },
}

interface GenreRecord {
    genre: any;
    count: number;
}

async function getData(params:any) {
    console.log('xxx',params.name);
    
    const res = await read(`
        MATCH (g)
        RETURN g
    `, {
        genre: params.name || '',
    })

    const genre = res[0].genre || 'test'
    const count = res[0].count || 'test'

    return {
        genre: {
            name: 'AC'
        },
        count: 20
    }
  }


interface GenreDetailsProps {
    genre: any;
    movies: any[];
    count: number;
    skip: number;
    page: number;
    limit: number;
}

export default async function GenreDetails({params}:any) {

    const { genre, count }: any = await getData(params)
    return (
        <div>

           DATA neo4j

            <GenreMovieList genre={genre} />
        </div>
    )
}
