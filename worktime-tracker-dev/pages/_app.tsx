import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";
import '../styles/globals.css'

export default function WorkTimeTracker({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
