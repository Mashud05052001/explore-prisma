import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const result = await prisma.post.update({
  //     where: { id: 1 },
  //     data: { title: "Hello World", author: "Mahi" },
  //   });
  //   const result = await prisma.post.updateMany({
  //     where: { title: "Title 30" },
  //     data: { author: "Mahi", published: true },
  //   });

  // UPSERT DATA
  const upsertData = await prisma.post.upsert({
    where: { id: 34 },
    update: { author: "RAHMAT ULLAH" },
    create: { title: "Title 1", content: "Content 1" },
  });
  console.log(upsertData);
}

main();
