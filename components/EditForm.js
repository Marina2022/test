'use client'
import {updateTask} from "@/utils/actions";
import {useActionState, useState} from "react";

const EditForm = ({task}) => {

  const initialState={message: null}
  
  const [state, newFormAction, isPending] = useActionState(updateTask, initialState)
  
  const [value, setValue] = useState(task.content)
  
  return (
    <form action={newFormAction}>
      <input type="hidden" value={task.id} name="id"/>
      <input className="input input-bordered focus:outline-0" type="text" name='content' value={value} onChange={(e)=>setValue(e.target.value)} />
      <p className="text-sm text-red-600 mt-1">{state.message && state.message}</p>
      <button className={isPending ? "btn btn-primary mt-5 block" : "btn btn-primary mt-5 block"}>
        {
          isPending ? <span className="loading loading-spinner loading-sm"></span> : "Отправляй!"
        }
      </button>
    </form>
  );
};

export default EditForm;