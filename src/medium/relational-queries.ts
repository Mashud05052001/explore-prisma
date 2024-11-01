import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Fluent api
  const result = await prisma.user.findFirst({
    where: {
      id: 1,
    },
    include: {
      Post: true,
    },
  });
  // .Post(); // Fluent api

  // relational filter
  const publishedPostUserInfo = await prisma.user.findMany({
    include: {
      Post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUserInfo, { depth: Infinity });
}

main();
