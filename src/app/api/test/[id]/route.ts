import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export async function GET() {
    console.log("test");
    return Response.json({
        name: "mikelopster",
    });
}