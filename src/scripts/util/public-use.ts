const publicFolder = process.env.PUBLIC_FOLDER_PATH;

/** 用于获取 public 路径的函数 */
export default function publicUse(path: string): string {
    return (publicFolder || '') + (path[0] !== '/' ? `/${path}` : path);
}