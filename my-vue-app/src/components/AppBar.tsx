const AppBar = () => {
  return (
    <nav className="bg-sugar p-3 w-full">
      <div className="grid grid-cols-3 text-center">
        <div className="flex-1"></div>
        <h2 className="font-bold flex-1  text-rose text-4xl font-playwrite">
           My Calendar
        </h2>

        <ul className="font-semibold flex flex-row justify-end">
          <li>
            <a href="#" className="block py-2 px-3 text-purple text-xl hover:underline ">
              My Period
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-purple text-xl hover:underline">
              My events
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-purple text-xl hover:underline">
              My Todo List
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-purple text-xl hover:underline">
              My Statistics
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default AppBar;
