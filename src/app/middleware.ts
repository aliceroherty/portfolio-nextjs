import { NextRequest } from 'next/server'
import { handleCors } from './middleware/cors'

export function middleware(req: NextRequest) {
	const response = handleCors(req)
    return response
}
