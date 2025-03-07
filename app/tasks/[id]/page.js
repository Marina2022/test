import React from 'react';
import EditForm from "@/components/EditForm";
import {getTask} from "@/utils/actions";

const Page = async ({params}) => {
  
  const {id} = await params  
  let task = null
  
  try {
    task = await getTask(id)  
  } catch (err){
    console.log('Ошибка из серверного компонента: ', err)
  }
  
  if (!task) return null
  
  return (
    <div className="w-4xl mx-auto mt-20">
      <p className="mb-5">Hello</p>      
      <EditForm task={task} />          
    </div>
  );
};

export default Page;