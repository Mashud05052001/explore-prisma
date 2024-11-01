import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*
OFFSET PAGINATION : SKIP , TAKE
Big scale er data r somoy time complexity beshi thake eiketre

CURSOR BASER PAGINATION

*/

async function main() {
  //   const result = await prisma.post.findMany({
  //     skip: 10,
  //     take: 10,
  //     select: { id: true },
  //   });

  //   const result = await prisma.post.findMany({
  //     cursor: {
  //       id: 15,
  //     },
  //     skip: 5,
  //     take: 5,
  //     select: { id: true },
  //   });
  const result = await prisma.post.findMany({
    orderBy: {
      title: "asc",
    },
    select: { title: true },
  });

  console.log(result);
}

main();
