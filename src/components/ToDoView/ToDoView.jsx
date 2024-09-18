const toDo = [];


export const ToDoView = () => {
  return (
    <div className="bg-slate-200 ">
      <div className="max-w-[1400px] w-[100%] h-[94vh] flex justify-center items-center mx-auto">
        <div className="bg-white w-[350px] flex justify-center items-start p-9 rounded-xl shadow-lg shadow-gray-500/50 md:w-[500px] h-[500px]">
          <table className="w-[400px] border-collapse border border-black rounded-lg overflow-hidden">
            <tbody>
              <tr>
                <td className="w-[50px] font-bold border p-1 rounded-tl-lg">
                  ID
                </td>
                <td className="w-[400px] font-bold border p-1 rounded-tr-lg">
                  To Do
                </td>
              </tr>
              {toDo.map((task) => (
                <tr
                  key={task.id}
                  {...task}

                  className="group/task odd:bg-white even:bg-slate-100"
                >
                  <td className="w-[50px] border p-1 rounded-bl-lg group-hover/task:bg-sky-100">
                    {task.id}
                  </td>
                  <td className="w-[400px] border p-1 rounded-br-lg cursor-pointer group-hover/task:bg-sky-100">
                    {task.name}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="w-[50px] border p-1 rounded-bl-lg"></td>
                <td className="w-[400px] border p-1 rounded-br-lg"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};