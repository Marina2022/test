import prisma from '@/utils/db';
import {revalidatePath} from "next/cache";

const DeleteForm = async ({id}) => {
  const handleDelete = async()=>{
    'use server'
       
    await prisma.task.delete({
      where: {
        id: id
      }
    })
    revalidatePath('/tasks')    
  }
  
  return (
    <form action={handleDelete}>
    <button className="btn btn-danger">
      Delete
    </button>
    </form>
  );
};

export default DeleteForm;