import { NextSeo } from 'next-seo'
import clsx from 'clsx'
import Layout from '../components/Layout'
import Image from '../components/Image'
import styles from '../styles/Home.module.scss'
import logo from '../public/logo@2x.png'
import { browserTracker } from '@pandastack/event-tracker';
import { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
      browserTracker.init({ project_id: "f680f8f8-201d-403d-8a33-b06eeb9490dc" });
    }, []);

  return (
    <Layout>
      <NextSeo
        title="Ajay"
        description="Next.js Static Site Starter"
        openGraph={{
          type: 'website',
        }}
      />
      <div
        className={clsx(
          'grid grow shrink-0 place-content-center place-items-center',
          styles.hero
        )}
      >
        <figure className="max-w-3xl">
          <Image src={logo} alt="NextSSS Logo" />
        </figure>
        <h1 className="mt-10 font-extrabold text-center">Hello, World!</h1>
      </div>
    </Layout>
  )
}

export default Home
