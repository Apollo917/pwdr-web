import fs from 'fs';
import path from 'path';

const DEFAULT_EXT = '.js';

const fixExt = (dir, newExt) =>
  fs.readdirSync(dir).forEach((file) => {
    if (file.endsWith(DEFAULT_EXT)) {
      const oldPath = path.join(dir, file);
      const newPath = path.join(dir, file.replace(DEFAULT_EXT, newExt));
      fs.renameSync(oldPath, newPath);
    }
  });

try {
  fixExt('./dist', '.mjs');
} catch (err) {
  console.error(err.message);
}
