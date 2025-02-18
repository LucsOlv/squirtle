import { Liquid } from "liquidjs";
// Configura o LiquidJS, definindo o diretório dos templates e a extensão dos arquivos
export const engine = new Liquid({
  root: process.cwd() + "/src/views",
  extname: ".liquid",
});
