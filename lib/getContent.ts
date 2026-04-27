import fs from 'fs';
import path from 'path';

// Define the absolute path to content.json
const CONTENT_FILE_PATH = path.join(process.cwd(), 'lib/content.json');

/**
 * Reads the latest content from content.json
 */
export function getContent() {
  try {
    const fileContents = fs.readFileSync(CONTENT_FILE_PATH, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to read content.json", error);
    return null;
  }
}

/**
 * Writes updated content to content.json
 */
export function saveContent(data: any) {
  try {
    fs.writeFileSync(CONTENT_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error("Failed to save content.json", error);
    return false;
  }
}
