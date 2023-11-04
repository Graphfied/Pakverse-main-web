import type { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Pricing from '../components/Pricing';
import Testimonies from '../components/Testimonies';
import Action from '../components/Action';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pakverse</title>
        <meta content="Example" name="Future For Startups" />
        <meta property="og:url" content="pakverse.org" />
        <meta property="og:description" content="Future For Startups" />
        <meta property="og:title" content="Pakverse" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
        
      </Head>
      <div className="h-full leading-normal text-gray-600 ">
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
          style={{
            backgroundImage: "url('images/splash.jpeg')",
            zIndex: -1,
          }}
        />
        <Header />
        <Landing />
        <Features />
        <Demo />
        <Pricing />
        <Testimonies />
        <Action />
        <Footer />
      </div>
    </>
  );
};

export default Home;















// import type { NextPage } from 'next';
// import Head from 'next/head';

// import Header from '../components/Header';
// import Landing from '../components/Landing';
// import Features from '../components/Features';
// import Demo from '../components/Demo';
// import Pricing from '../components/Pricing';
// import Testimonies from '../components/Testimonies';
// import Action from '../components/Action';
// import Footer from '../components/Footer';

// const Home: NextPage = () => {
//   return (
//     <>
//       <Head>
//         <title>Pakverse</title>
//         <meta content="Example" name="description" />
//         <meta property="og:url" content="pakverse.org" />
//         <meta property="og:description" content="Always Ahead of Latest AI Trends" />
//         <meta property="og:title" content="PakverseAI" />
//         <meta property="og:image" content="" />
//         <link rel="shortcut icon" href="/favicon.png" />
//       </Head>
//       <div className="bg-gray-400 sm:bg-transparent md:h-full leading-normal text-gray-600">
//         <video 
//           className="hidden sm:block absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
//           style={{ zIndex: -1, width: '2880px', height: '1070px' }}
//           autoPlay
//           muted
//           loop
//         >
//           <source src="https://cdn.discordapp.com/attachments/1151576407542083725/1162505353179701358/Untitled_design.mp4?ex=653c2e7a&is=6529b97a&hm=de4a1b894df6900a82460574a82c02b7b39cc0e7852861c34592ab6890591880&" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
        
//         <Header />
//         <Landing />
//         <Features />
//         <Demo />
//         <Pricing />
//         <Testimonies />
//         <Action />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;
