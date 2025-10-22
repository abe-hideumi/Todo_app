const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const todos = await prisma.todo.findMany();
  console.log('All todos in database:');
  console.log(JSON.stringify(todos, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
