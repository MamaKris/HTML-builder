const fs = require('fs');
const path = require('path');

const question = 'Hi! Let\'s go ? '


function go() {
    fs.appendFile(path.join(__dirname, 'test.txt'), '', () => { });
    process.stdout.write(question + '  >  ');
}

process.stdin.on('data', function (data) {
    const newText = data.toString().trim() + '\n';
    fs.appendFile(path.join(__dirname, 'test.txt'), newText, () => {
        console.log('OK!');
    });

    if (newText.trim() === 'exit') {
        console.log('See you...');
        process.exit();
    }
});

process.on('SIGINT', () => {
    console.log('\nSee you...');
    process.exit();
});

go();
