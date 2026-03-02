import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Pastas que o script vai varrer
const pastasParaOtimizar = ['./public/portfolio', './public/logos'];

console.log('⏳ Iniciando a otimização de imagens para WebP...\n');

pastasParaOtimizar.forEach(pasta => {
  // Verifica se a pasta existe antes de tentar ler
  if (!fs.existsSync(pasta)) return;

  fs.readdirSync(pasta).forEach(arquivo => {
    // Procura por imagens jpg, jpeg ou png (maiúsculas ou minúsculas)
    if (arquivo.match(/\.(jpg|jpeg|png)$/i)) {
      const caminhoEntrada = path.join(pasta, arquivo);
      // Cria o novo nome trocando a extensão para .webp
      const caminhoSaida = path.join(pasta, arquivo.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

      // O comando mágico do Sharp
      sharp(caminhoEntrada)
        .webp({ quality: 80 }) // 80% de qualidade é o ponto perfeito entre leveza e nitidez
        .toFile(caminhoSaida)
        .then(() => console.log(`✅ Sucesso: ${arquivo} otimizado para WebP!`))
        .catch(err => console.error(`❌ Erro ao otimizar ${arquivo}:`, err));
    }
  });
});