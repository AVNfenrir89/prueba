const http = require('node:http')
const fs = require('node:fs')
const mysql = require('mysql2/promise')

const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
}
async function abrirConexion() {
    try {
        const conexion = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '@Ndrey89',
            database: 'matricula'
        });
        console.log('Conectado a la base de datos');
        return conexion;
    } catch (error) {
        console.error('Error conectando a la base de datos:', error.stack);
        throw error;
    }
  }
  
const servidor = http.createServer((pedido, respuesta) => {
    const url = new URL('http://localhost:8888' + pedido.url)
    let ruta = 'public' + url.pathname
    if (ruta == 'public/')
      ruta = 'public/index.html'
    //encaminar(pedido, respuesta, ruta)
})
    
servidor.listen(8888)
console.log('Servidor web iniciado')

// function encaminar(pedido, respuesta,ruta) {

//     switch (ruta) {
  
//       case 'public/nuevo_estudiante': {
//        nuevoEstudiante(pedido, respuesta)
//         break
//       }
  
//       case 'public/matricula': {
//         matricula(pedido, respuesta)
//         break
//       }
  
//       case 'public/materias': {
//         materias(pedido, respuesta)
//         break
//       }
//       case 'public/materiasMatricula': {
//         materiasMatricula(pedido, respuesta)
//         break
//       }
//       case 'public/leerEstudiante': {
//         leeEstudiante(respuesta)
//         break
//       }
//       case 'public/matriculaFinal': {
//         matriculaFinal(pedido, respuesta)
//         break
//       }
  
//       default: {
//         fs.stat(ruta, error => {
//           if (!error) {
//              fs. readFile(ruta, (error, contenido) => {
//                   if (error) {
//                       respuesta.writeHead(500, { 'Content-Type': 'text/plain' });
//                       respuesta.write('Error interno');
//                       respuesta.end();
//                   } else {
//                       const vec = ruta.split('.');
//                       const extension = vec[vec.length - 1];
//                       const mimearchivo = mime[extension];
//                       respuesta.writeHead(200, { 'Content-Type': mimearchivo });
//                       respuesta.write(contenido);
//                       respuesta.end();
//                   }
//               });
//           } else {
//               respuesta.writeHead(404, { 'Content-Type': 'text/html' });
//               respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
//               respuesta.end();
//           }
  
//         })
//       }
//     }
    
//   }
  