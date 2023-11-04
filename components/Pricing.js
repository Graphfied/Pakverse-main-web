import ScrollAnimation from '../components/ScrollAnimation';

const Feature = ({ featureText }) => {
  return (
    <li className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-shrink-0 w-4 h-4 mt-1.5 mr-2 text-gray-700 md:h-4 md:w-4"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <div>{featureText}</div>
    </li>
  );
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 md:pb-32 bg-gradient-to-t from-black to-white-100"
    >
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 md:mb-28">
          <div className="max-w-3xl mx-auto md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-lg bg-[#000000] bg-opacity-100 hover:cursor-pointer hover:bg-opacity-40 mb-4">
              Pricing for You
            </div>
            <h2 className="mb-5 text-3xl font-semibold text-gray-800 md:text-5xl">
              Best of all? Affordable pricing.
            </h2>
            <p className="text-xl md:text-2xl">
              Our products are designed to provide a high-quality
              experiece – all at an affordable price.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 mt-12 md:mt-0 xl:grid-cols-3 ">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                Pioneer
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>$1</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                Perfect for early-stage startups or those just beginning their entrepreneurial journey. Get acquainted with
                the tools and services that will set the foundation for your business's growth.
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Access to basic AI-powered tools to kickstart your business operations." />
                <Feature featureText="Introduction to Web2 with a basic Web2 website template." />
                <Feature featureText="Initial consultancy session to outline your business roadmap." />
              </ul>
              <a
                href="https://pakverse-getaquote.vercel.app/"
                className="px-5 py-6 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 hover:bg-blue-100  focus:outline-none"
              >
                Get Started{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 transform bg-white border border-white border-opacity-50 shadow-2xl rounded-xl bg-opacity-90 md:space-y-6 md:p-8 xl:scale-110">
              <p className="absolute top-0 w-1/2 px-4 py-1 text-sm font-semibold text-center transform -translate-x-1/2 -translate-y-4 rounded-full left-1/2 bg-sky-500 text-sky-100">
              Growth Package
              </p>
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  Navigator
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>$50 / month</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                Designed for startups ready to take the next leap. With a focus on scaling and expanding, the Navigator package offers advanced tools and support to navigate the challenges of growth.
                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Advanced suite of AI-powered tools tailored for scaling businesses." />
                <Feature featureText="Enhanced Web3 website with customizable features and basic blockchain integration." />
                <Feature featureText="Ongoing marketing support and business consultancy to ensure continued growth."/>
                <Feature featureText="Early access to ChatGPT 2.0 for beta testing." />
              </ul>
              <a
                href="https://pakverse-getaquote.vercel.app/"
                className="px-5 py-6 font-semibold text-gray-100 transition duration-300 ease-in-out transform rounded-full shadow bg-gradient-to-t from-sky-800 to-sky-600 hover:-translate-y-1 hover:shadow-lg hover:bg-blue-100  focus:outline-none"
              >
                Get Started{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="flex flex-col h-full p-6 space-y-4 bg-white bg-opacity-75 border border-white border-opacity-75 shadow-xl undefined rounded-xl md:space-y-6 md:p-8">
              <div className="flex items-center justify-center">
                <h4 className="text-2xl font-semibold text-gray-800 md:text-4xl">
                Vanguard
                </h4>
              </div>
              <h5 className="text-xl font-semibold text-center text-gray-800">
                <div>Custom Price</div>
                <div className="mt-4 text-base font-normal text-gray-700">
                For the startups that settle for nothing but the best. The Vanguard package provides an all-encompassing suite of services, tools, and support, ensuring that your business is always at the forefront of innovation.
                These packages can be further customized based on the specific needs and feedback from potential clients. Let me know if you'd like any changes or additions!

                </div>
              </h5>
              <hr className="border-t border-gray-300" />
              <ul className="flex-grow pb-8 space-y-2 md:space-y-4 md:pb-10 md:text-lg">
                <Feature featureText="Full access to all AI tools, including priority access to new features and tools." />
                <Feature featureText="Fully customizable Web3 website with complete blockchain integration." />
                <Feature featureText="Dedicated marketing team support and in-depth business consultancy sessions." />
                <Feature featureText="Priority access to ChatGPT 2.0 upon release and other future tools."/>
                <Feature featureText="Exclusive invitations to Pakverse webinars and events."/>
              </ul>
              <a
                href="https://pakverse-getaquote.vercel.app/"
                className="px-5 py-6 font-semibold text-gray-800 transition ease-in-out transform bg-white rounded-full shadow-md bg-opacity-70 hover:-translate-y-0.5 hover:bg-opacity-100 hover:bg-blue-100 bg-gradient focus:outline-none"
              >
                Contact Sales{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mb-0.5 inline h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
