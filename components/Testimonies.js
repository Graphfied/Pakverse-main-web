const Tweet = ({ name, position, text, photoLink, tweetLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <a href={tweetLink} className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
          <div className="flex items-center space-x-4">
            <img
              src={photoLink}
              className="w-12 h-12 bg-center bg-cover border rounded-full"
              alt={name}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {name}
              </h3>
              <p className="text-gray-500 text-md">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300 text-md">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
};

export default function Testimonies() {
  return (
    <section id="testimonies" className="py-20 bg-black">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <Tweet
                name="Sarah Mitchell"
                position="Co-founder, TechFlex"
                text="Pakverses AI tools were game-changers for us. They streamlined our operations and gave us insights we never knew we needed!."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/kanyewest"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Jordan Lee"
                position="CEO, NextGen Solutions"
                text="The Vanguard package was everything our startup needed and more. From Web3 integration to top-notch consultancy, Pakverse delivered."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/tim_cook"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Ayesha Khan"
                position="Marketing Head, GreenSustain"
                text="Our marketing campaigns reached new heights with Pakverse's expert guidance. Their team truly understands the modern digital landscape."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/kanyewest"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Carlos Mendoza"
                position="CTO, InnovateCorp"
                text="As a tech enthusiast, I'm blown away by the advanced tools and technologies Pakverse offers. Truly ahead of the curve!"
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/tim_cook"
              />
            </li>
          </ul>
          <ul className="hidden space-y-8 sm:block">
            <li className="text-sm leading-6">
              <Tweet
                name="Natasha Boyd "
                position="Founder, EduFusion"
                text="Navigating the world of startups was daunting until we partnered with Pakverse. Their Starter Package set the perfect foundation for our journey."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/paraga"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name=" Raj Patel"
                position="Director, HealthFirst Solutions"
                text="Blockchain integration was a breeze with Pakverse. They made a complex process seem so simple and efficient."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/tim_cook"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Andre Dupont"
                position="Director, AeroDynamics"
                text="As a company always aiming for the skies, Pakverse ensured we had the wind beneath our wings. Their Growth Package was a perfect fit."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/paraga"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Elena Rodriguez"
                position="Manager, StylePulse"
                text="Pakverse's team feels like an extension of our own. Always there, always supportive, and always pushing us towards greatness."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/tim_cook"
              />
            </li>
          </ul>
          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6">
              <Tweet
                name="Samuel Okafor"
                position="CEO, AgriTech Africa"
                text="From the ideation stage to scaling, Pakverse was our guiding light. Their holistic approach to supporting startups is unmatched."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/satyanadella"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name=" Hana Kim"
                position="Product Lead, ByteHub"
                text="Eagerly waiting for ChatGPT 2.0! If it's anything like Pakverse's other offerings, I know it's going to revolutionize our customer interactions."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/dan_schulman"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name=" Liam O'Reilly"
                position="Co-founder, TravelEase"
                text="Pakverse's consultancy services provided clarity in our chaotic startup phase. Their insights were invaluable."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/satyanadella"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name=" Fatima Al-Mansoori"
                position="CEO, DesertDreams"
                text="In the competitive world of startups, Pakverse gives you the edge. Their AI tools and Web3 expertise are top-notch."
                photoLink="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                tweetLink="https://twitter.com/dan_schulman"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
