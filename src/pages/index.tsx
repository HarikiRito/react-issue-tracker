import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AppButton } from 'src/components/Button/App'
import { KanbanBoard } from 'src/modules/KanbanBoard'
import { AppFlatButton } from 'src/components/Button/Flat'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AppBoardCard } from 'src/components/Board/Card'
import { resetServerContext } from 'react-beautiful-dnd'
import { NoSSR } from 'src/components/NoSSR'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <NoSSR>
          <KanbanBoard />
        </NoSSR>
      </main>
    </div>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      // Will be passed to the page component as props
    },
  }
}
export default Home
