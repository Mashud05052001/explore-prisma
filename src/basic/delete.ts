import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
/*
delete({where : {}})   must be unique field provide
deleteMany({where : {}}) 
deleteMany({})  => Delete all values
*/
async function main() {
  // Must be unique field ke delete korte hobe
  const result = await prisma.post.delete({
    where: { id: 2 },
  });
  const result1 = await prisma.post.deleteMany({
    where: { author: "Mahi" },
  });
  console.log(result1);
}

main();
