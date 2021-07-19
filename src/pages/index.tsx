import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

export default function Home() {
  const [data, setData] = useState(null)

  return <>
  <div>Welcome to Next.js!</div>
  <div>{data}</div>
  </>
}
