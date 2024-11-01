import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.post.create({
    data: {
      title: "Title 20",
      content: "Content 20",
      author: "Author 20",
    },
  });
  console.log(result);
}

main();
