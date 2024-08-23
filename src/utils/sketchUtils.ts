export function getChapterName(pathParts: string[]): string {
    const chapterPart = pathParts.find((part) => part.startsWith('chapter'));
    const chapterNum = chapterPart ? chapterPart.replace('chapter', '') : '';
    return `Chapter ${chapterNum}`;
}

export function getTitleFromPath(pathParts: string[]): string {
    const folderName = pathParts[pathParts.length - 2];
    return folderName.replace(/-/g, ' ');
}