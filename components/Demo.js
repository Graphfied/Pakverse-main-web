export default function Demo() {
  return (
    <section id="demo" className="py-20 bg-opacity-50 bg-white">
      <div className="mx-8 max-w-7xl md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 text-left md:mb-20 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-black bg-opacity-100 text-white hover:cursor-pointer hover:bg-opacity-80">
              Product in Action
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 md:text-5xl">
              Here's a demo
            </h1>
            <p className="mx-auto text-xl md:w-2/3 md:text-2xl">
              Talk a little bit about the product here and how it can
              be revolutionary for the customer.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 text-sm rounded-lg bg-black bg-opacity-100 text-white hover:cursor-pointer hover:bg-opacity-80">
          Technology
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#ff71f3] to-[#5b02ff] bg-clip-text text-3xl font-medium text-transparent">
        ChatGPT 2.0 - Coming Soon:
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
        Engage with our next-gen conversational AI. Whether it's customer support or gathering insights, ChatGPT 2.0 will revolutionize your interaction dynamics.
        </p>
        <img
          src="images/image.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-black bg-opacity-100 hover:border-emerald-300 hover:shadow-xl md:col-span-2">
            <div>
              <h3 className="text-lg font-medium text-white">
              API Customization
              </h3>
              <p className="mt-1 text-white text-md">
              Tailor ChatGPT 2.0 to fit your needs. With our flexible platform, you can seamlessly integrate your own API, ensuring a customized and efficient experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-black bg-opacity-100 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-white">
              Enhanced Interaction
              </h3>
              <p className="mt-1 text-white text-md">
              Beyond just answers, ChatGPT 2.0 dives deep to understand user intent, providing richer and more relevant interactions, be it for customer support or insightful data gathering.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl px-8 mx-auto sm:px-6 sm:pt-20 lg:max-w-5xl lg:px-8">
        <div className="inline-block px-3 py-1 mt-12 text-sm rounded-lg md:md-0 bg-black bg-opacity-100 text-white hover:cursor-pointer hover:bg-opacity-80">
          Product in Action
        </div>
        <h2 className="mt-4 bg-gradient-to-r from-[#ff71f3] to-[#5b02ff] bg-clip-text text-3xl font-medium text-transparent">
          Experience Pakverse Unfold
        </h2>
        <p className="mt-4 text-lg font-normal lg:max-w-3xl">
        Dive deep into the capabilities of Pakverse. Our tools are designed with precision,
        and our services are crafted for excellence. Below, get a firsthand look at our product's 
        demo and discover the key features that set us apart.
        </p>
        <img
          src="images/imagepro.png"
          className="mt-8 rounded-xl"
          alt="placeholder"
        />
        <div className="grid grid-cols-1 grid-rows-1 gap-2 mt-4 md:auto-cols-auto md:grid-cols-3">
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-black bg-opacity-100 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-white">
              AI-Driven Solutions
              </h3>
              <p className="mt-1 text-white text-md">
              Harness the power of artificial intelligence with Pakverse. 
              Our tools utilize cutting-edge AI algorithms to provide insights, 
              streamline processes, and elevate your business operations.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-black bg-opacity-100 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-white">
                Web3 Integration
              </h3>
              <p className="mt-1 text-white text-md">
              Embrace the future with our advanced Web3 integration. 
              Create decentralized applications, ensure secure transactions, 
              and step into the next digital era.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 transition duration-500 border-2 shadow-md border-tranparent rounded-xl bg-black bg-opacity-100 hover:border-emerald-300 hover:shadow-xl">
            <div>
              <h3 className="text-lg font-medium text-white">
               Comprehensive Support
              </h3>
              <p className="mt-1 text-white text-md">
              At Pakverse, we believe in empowering our clients. 
              From initial setup to advanced troubleshooting, our dedicated 
              team is here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
