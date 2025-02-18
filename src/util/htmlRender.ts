import ejs from "ejs";
import { join } from "path";

export default async function RenderHtml(fileName: string, params: any) {
    //get relative path
    const templatePath = join(process.cwd(), "src/views", fileName); // Caminho do template
    const template = await Bun.file(templatePath).text();
    const htmltemplate = await ejs.render(template, params);
    return htmltemplate;
}