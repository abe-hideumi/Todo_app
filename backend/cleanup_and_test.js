const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Delete all todos
  await prisma.todo.deleteMany();
  console.log('All todos deleted');
  
  // Verify database is empty
  const count = await prisma.todo.count();
  console.log('Todo count:', count);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
