

const Homebtn2 = () => {
  return (
    <>
    <button
      className="relative w-full flex items-center gap-1 bg-[#2B73B3] px-9 py-2 border-4 border-black text-base bg-inherit rounded-md font-semibold text-white cursor-pointer overflow-hidden transition-all duration-600 ease-custom hover:text-black hover:rounded-lg group hover:transition-all duration-700 hover:duration-700"
    >
      <svg
        viewBox="0 0 24 24"
        className="absolute w-6 fill-white z-[9] transition-all duration-700 ease-custom -left-1/4 group-hover:left-4 group-hover:fill-[#212121]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
      <span
        className="relative z-[1] transition-all duration-700 ease-custom -translate-x-3 group-hover:translate-x-3">Talk to an Expert </span>
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full opacity-0 transition-all duration-700 ease-custom group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"
      ></span>
      <svg
        viewBox="0 0 24 24"
        className="absolute w-6 fill-white z-[9] transition-all duration-700 ease-custom right-4 group-hover:-right-1/4 group-hover:fill-[#212121]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        ></path>
      </svg>
    </button>

    </>

  )
}

export default Homebtn2