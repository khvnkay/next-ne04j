import type { NextApiRequest, NextApiResponse } from 'next'
import { int } from 'neo4j-driver'
import { read } from '../../../../../lib/neo4j'
import Movie from '../../../../../../types/movie';
import { log } from 'console';

interface MovieResult {
  count: string;
  movie: Movie;
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<{ total: number, data: Movie[] }>
// ) {
//   const { name } = req.query
//   const limit = parseInt(req.query.limit as string ?? '10')
//   const page = parseInt(req.query.page as string ?? '1')
//   const skip = (page - 1) * limit
//   console.log('xxxlllk');


//   const result = await read(`
//     MATCH (m)
//     RETURN m

//   `, {
//     genre: name,
//     limit: int(limit),
//     skip: int(skip)
//   })

//   res.status(200).json({
//     total: parseInt(result.length) || 0,
//     data: result
//   })
// }


export async function GET(
  request: any, { params }: any
) {
  // console.log("handler==", params);
  const { name } = params
  const limit = parseInt(params?.query?.limit as string ?? '10')
  const page = parseInt(params?.query?.page as string ?? '1')
  const skip = (page - 1) * limit

  const result: any = await read(`
    MATCH (m)
    RETURN m

  `, {
    genre: name,
    limit: int(limit),
    skip: int(skip)
  })
  console.log("test", result);
  return Response.json({
    total: result.length,
    data: result || []
  });
}