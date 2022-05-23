const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
        const arr = [];
        if (file.isDirectory() === true) return;

        const name = file.name.split('.')[0];
        const ext = path.extname(file.name).split('.')[1];
        const myPath = path.join(`${__dirname}/secret-folder`, `${file.name}`);

        fs.stat(myPath, (err, stats) => {
            const size = `${stats.size / 1000}kb`;

            arr.push(name, ext, size);
            const result = arr.join(' . ');
            console.log(result);
        });
    });
});
