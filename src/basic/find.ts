import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
1. findMany
2. findFirst , findFirstOrThrow
3. findUnique , findUniqueOrThrow 
*/

async function main() {
  //   const data = await prisma.post.findMany();
  //   const data = await prisma.post.findFirst({
  //     where: { id: 1 },
  //   });
  //   const data1 = await prisma.post.findFirstOrThrow({
  //     where: { published: true },
  //   });
  const data2 = await prisma.post.findUniqueOrThrow({
    where: { id: 34 },
    select: { title: true, author: true, id: true },
  });
  console.log(data2);
}

main();
