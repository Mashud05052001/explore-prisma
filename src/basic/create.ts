import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.post.create({
    data: {
      title: "Title 30",
      content: "Content 30",
      author: "Author 30",
    },
  });
  //   const result = await prisma.post.createMany({
  //     data: [
  //       {
  //         title: "Title 26",
  //         content: "Content 26",
  //         author: "Author 26",
  //       },
  //       {
  //         title: "Title 27",
  //         content: "Content 27",
  //         author: "Author 27",
  //       },
  //       {
  //         title: "Title 28",
  //         content: "Content 28",
  //         author: "Author 28",
  //       },
  //       {
  //         title: "Title 29",
  //         content: "Content 29",
  //         author: "Author 29",
  //       },
  //       {
  //         title: "Title 30",
  //         content: "Content 30",
  //         author: "Author 30",
  //       },
  //     ],
  //   });
}

main();
