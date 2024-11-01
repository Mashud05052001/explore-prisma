import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  // 1
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "user 2",
  //       email: "user2@gmail.com",
  //       role: UserRole.user,
  //     },
  //   });
  // 2
  // console.log(createUser);
  //   const createUserProfile = await prisma.profile.create({
  //     data: {
  //       bio: "Bio 1...",
  //       userId: 1,
  //     },
  //   });
  // 3
  //   const createCategory = await prisma.category.create({
  //     data: { name: "Software Engineering" },
  //   });
  // 4
  const createPost = await prisma.post.create({
    data: {
      title: "Title 1",
      content: "Content 1",
      authorId: 1,
      PostCategory: {
        create: [{ categoryId: 1 }, { categoryId: 2 }, { categoryId: 3 }],
        // {
        // categoryId: 1,   // using categoryID can create post
        // 2 using category itseft to create
        // category: {
        //   connect: {
        //     id: 1,
        //   },
        // },
        // },
      },
    },
    include: {
      PostCategory: true,
    },
  });
  console.log(createPost);
}

create();
