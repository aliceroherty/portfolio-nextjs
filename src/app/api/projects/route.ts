import { PrismaClient } from '../../../../generated/prisma'

export async function GET() {
	const client = new PrismaClient()
    return new Response(JSON.stringify(await client.projects.findMany()));
}
