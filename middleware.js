import {NextResponse} from "next/server";

export const middleware = (request)=>{
 // return Response.json({msg: 'hello from middleware '})

  console.log(new URL('/tasks', request.url))
 return NextResponse.redirect(new URL('/tasks', request.url))
  
  
}

export const config = {
  matcher: '/client/:path*'
}