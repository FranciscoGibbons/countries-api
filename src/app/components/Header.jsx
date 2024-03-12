import Theme from "./Theme"

const Header = () => {
  return (  
    <header className="bg-white px-5 md:px-10 lg:px-48 py-5 flex justify-between items-center dark:bg-main">
        <h1 className="text-black dark:text-white text-xl md:text-[30px] font-bold">Where in the world?</h1>

        <Theme />
    </header>
  )
}

export default Header