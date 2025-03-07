'use client'

import {createTask} from "@/utils/actions";
import {useActionState, useEffect} from "react";
import toast from "react-hot-toast";


const TaskForm = () => {
  
  const initialState = {message: null}
  const [state, action, isPending] = useActionState(createTask, initialState)
  
  useEffect(()=>{    
    if (state.message === 'success'){
      toast.success('Ура, добавилось!')
      return
    }

    if (state.message === 'error'){
      toast.success('Ошибка какая-то')
      return
    }
  }, [state.message])
    
  return (
    <form action={action}>
      <div className="join mt-10 w-full">
        <input type="text" className="join-item input input-bordered w-full focus:outline-2 focus:outline-offset-0 focus:outline-neutral-300 focus:border-0 " placeholder="type here..." name="content" required />
        <button disabled={isPending} className="join-item btn btn-primary">
          Create Task
          {isPending ? <span className="loading"></span> : ''}
        </button>
      </div>      
    </form>
  );
};

export default TaskForm;