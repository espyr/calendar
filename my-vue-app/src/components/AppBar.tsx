import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate()
  return (
    <nav className="bg-sugar p-3 w-full">
      <div className="grid grid-cols-3 text-center">
        <div className="flex-1"></div>
        <div className="font-bold flex flex-1 text-center align-middle justify-center self-center  text-rose text-4xl font-playwrite">
           My Calendar
        </div>

        <ul className="font-semibold flex flex-row justify-end">
        <li>
            <div onClick={()=>navigate('/')}  className="block py-2 px-3 cursor-pointer text-purple text-nowrap text-lg hover:underline ">
              My Calendar
            </div>
          </li>
          <li>
            <div onClick={()=>navigate('/my-period')}  className="block py-2 px-3 cursor-pointer text-purple text-nowrap text-lg hover:underline ">
              My Period
            </div>
          </li>
          <li>
            <div   onClick={()=>navigate('/my-todo-list')} className="block py-2 px-3 cursor-pointer text-purple text-nowrap text-lg hover:underline">
              My Todo List
            </div>
          </li>
          <li>
            <div   onClick={()=>navigate('/my-statistics')}  className="block py-2 cursor-pointer px-3 text-purple text-nowrap text-lg hover:underline">
              My Statistics
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default AppBar;
