import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil";

export default function WorkTimeTracker({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
