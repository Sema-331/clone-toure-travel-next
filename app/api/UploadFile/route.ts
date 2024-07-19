// import formidable from 'formidable';
// import fs from 'fs';
// import path from 'path';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async (req, res) => {
//   const form = new formidable.IncomingForm();
//   form.uploadDir = path.join(process.cwd(), 'public/uploads');
//   form.keepExtensions = true;

//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       return res.status(500).json({ error: 'Failed to parse form data' });
//     }

//     const file = files.file;
//     const filePath = path.join('/uploads', path.basename(file.path));

//     // Save the file URL in the database
//     const userId = '4d6ec45e-60f4-4fc5-b60e-ba91f8e18272'; // Replace with the actual user ID
//     await prisma.user.update({
//       where: { id: userId },
//       data: { profilePicture: filePath },
//     });

//     res.status(200).json({ message: 'File uploaded successfully', filePath });
//   });
// };
