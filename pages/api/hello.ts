// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { Recipe } from "../types/Recipe";

const prisma = new PrismaClient();

type Data = {
  recipe?: Recipe;
  recipes?: Recipe[];
  message?: string;
  error?: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    return await addRecipe(req, res);
  } else if (req.method == "GET") {
    return await getRecipes(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function getRecipes(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const allRecipes = await prisma.recipes.findMany();
    return res.status(200).json({ recipes: allRecipes, success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}

async function addRecipe(req: NextApiRequest, res: NextApiResponse<Data>) {
  const body = req.body;
  try {
    const newEntry = await prisma.recipes.create({
      data: {
        title: body.title,
        ingredients: body.ingredients,
        method: body.method,
        cookingTime: body.cookingTime,
      },
    });
    return res.status(200).json({ recipe: newEntry, success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error adding recipe", success: false });
  }
}
