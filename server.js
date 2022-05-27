// const express= require('express');

// const serverConfig= require('./configs/server.config');
// const app = express();

// app.listen(serverConfig.PORT, () => {
//       console.log(`Application started on the port no : ${serverConfig.PORT}`);
// })
const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git').exports;
const git = gitExtension.getAPI(1);
