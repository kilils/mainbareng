import { S3Client } from "@aws-sdk/client-s3";

export const s3client = new S3Client({
  region: "apac",
  endpoint: process.env.R2_S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_ID,
    secretAccessKey: process.env.R2_ACCESS_SECRET,
  },
});
