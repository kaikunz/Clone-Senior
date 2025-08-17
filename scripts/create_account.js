require('dotenv').config();
const { hash } = require("bcryptjs");
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function create_account() {
  try {

    console.log(`Account Creating...`);

    let user = await prisma.user.findUnique({
        where: { email: "test@admin.com" },
    });

    if (!user) {
        
        const password = "1234"
        const hashed_password = await hash(password, 12);

        user = await prisma.user.create({
            data: {
              name: "admin", 
              email: "test@admin.com",
              nickname: "admin",
              follower: 0, 
              password: hashed_password,
            },
        });
        
    }
    
    console.log("Account created! test@admin.com");

    
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

create_account();