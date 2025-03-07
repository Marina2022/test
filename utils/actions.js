'use server'

import prisma from "@/utils/db";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {z} from 'zod'

const TaskSchema = z.object({
  content: z.string().min(5)
})
export const createTask = async(state, formData)=>{
  const content = formData.get('content')
  
  try {
    TaskSchema.parse({content})
    await prisma.task.create({
      data: {
        content: content
      }
    })
    revalidatePath('/tasks')
    
    return {message: 'success'}
  } catch (err) {
    return {message: 'error'}
  }
  
}
export const getTask = async (id) => {
  const task = await prisma.task.findUnique({where: {id: id}})
  return task
}

export const updateTask = async (state, formData) => {
  const id = formData.get('id')
  const content = formData.get('content')

  try {
      
    TaskSchema.parse({content})
    
    await prisma.task.update({
      where: {id: id},
      data: {
        content: content
      }
    })
    revalidatePath('/tasks')

  } catch (err) {
    return {message: err.message ? JSON.parse(err.message)[0].message : 'something wrong on server'}
  }

  redirect('/tasks')

}