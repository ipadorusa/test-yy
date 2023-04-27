import { Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DefaultLayout as Layout} from '@/components/layout'
import type { AppPropsWithLayout } from '@/type/NextPageWithLayout'
import '@/styles/globals.css'


const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
});


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || DefaultLayout
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider> 
  )
}

function DefaultLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
