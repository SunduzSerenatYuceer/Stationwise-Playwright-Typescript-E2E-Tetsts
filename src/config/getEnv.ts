import * as dotenv from "dotenv"; 
dotenv.config();

export function getEnv(variable: string): string {
    const value = process.env[variable];
    if (!value) {
      throw new Error(`Environment variable ${variable} is required but was not provided.`);
    }
    return value;
  }