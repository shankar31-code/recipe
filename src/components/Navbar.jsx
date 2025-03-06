const Navbar=({toggleDarkMode,darkMode})=>{
return(
    <div className={`flex
    item-center justify-between ${darkMode?"bg-gray-800 text-white":" bg-blue-500"} p-5`}>
    <h1 className="text-xl font-bold">RECIPE FINDER</h1>
    <button onClick={toggleDarkMode} className="py-2 px-6 bg-white text-blue-500 rounded-lg border-none">Ligth Mode</button>
    </div>
)

}
export default Navbar;