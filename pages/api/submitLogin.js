import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import { NextResponse } from 'next/server';

// export async function handler(req, res) {
//   console.log('inside Handler', res);
//      return NextResponse.redirect('/shop')
// }

export default function handler(req, res) {
  // const { slug } = req.query;
  console.log(req.body)

  res.end('');
}