export default function Footer() {
  return (
    <>
    <footer className="relative pt-6 pb-6 bg-[#1EB47D]">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-3 pb-5 text-center lg:text-left">
          <div className="w-full mt-5 lg:w-[20rem]">
            <a href="/">
              {" "}
              <h1 className="mb-4 text-5xl font-bold text-white" >
                JALANKU
              </h1>
            </a>
          </div>
          <div className="text-white ml-20">
            <a href="/">
              <h1 className="my-2">Faqs</h1>
            </a>
            <a href="/">
              <h1 className="my-2">Live Chat</h1>
            </a>
            <a href="/">
              <h1 className="my-2">Help Center</h1>
            </a>
          </div>
          <div className="text-white ml-10">
            <a href="/">
              <h1 className="my-2">Privacy Policy</h1>
            </a>
            <a href="/">
              <h1 className="my-2">Terms of Service</h1>
            </a>
            <a href="/">
              <h1 className="my-2">Cookie Policy</h1>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

