import prisma from '@/utils/db'

const Prisma = async () => {
  const handlePrisma = async () => {
    await prisma.task.create({
      data: {
        content: "Get to work, now!"
      }
    })
    const allTasks = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })       
  }

  handlePrisma()
  
  return (
    <div>
     Prisma  
    </div>
  );
};

export default Prisma;