import prisma from '@/utils/db';
import Link from "next/link";
import DeleteForm from "@/components/DeleteForm";

const TaskList = async() => {
  
  const tasks = await prisma.task.findMany()
  
  return (
    <ul className="mt-20 text-sm">

      {
        tasks.map(task => {          
          return (
            <li className="items-center flex p-3 shadow-lg border border-base-200 bg-base-200 rounded-2xl mb-4" key={task.id}>
              
              <div className="w-xs">
              {task.content}
              </div>
              
              <Link href={`/tasks/${task.id}`} className="btn btn-accent mr-8">Edit</Link>
              <DeleteForm id={task.id}>Delete</DeleteForm>
            
            </li>
          )
        })
      }
      
    </ul>
  );
};

export default TaskList;