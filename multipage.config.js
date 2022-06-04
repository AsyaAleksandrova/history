const path = require('path')

result = {}

result.entry = {
   'main': path.join(__dirname, './src/pages/index.js'),
   'timeline': path.join(__dirname, './src/pages/timeline.js'),
   'tree': path.join(__dirname, './src/pages/tree.js'),
   'personalpage': path.join(__dirname, './src/pages/personalpage.js')
};

result.pages = [
   { chunks: ['main'], page: 'index.html', template: path.join(__dirname, './src/index.html') },
   { chunks: ['timeline'], page: 'pages/timeline.html', template: path.join(__dirname, './src/pages/timeline.html') },
   { chunks: ['tree'], page: 'pages/tree.html', template: path.join(__dirname, './src/pages/tree.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Alex1.html', template: path.join(__dirname, './src/pages/personalpages/Alex1.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Alex2.html', template: path.join(__dirname, './src/pages/personalpages/Alex2.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Alex3.html', template: path.join(__dirname, './src/pages/personalpages/Alex3.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/AlexMih.html', template: path.join(__dirname, './src/pages/personalpages/AlexMih.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/AnnaIo.html', template: path.join(__dirname, './src/pages/personalpages/AnnaIo.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Catherine1.html', template: path.join(__dirname, './src/pages/personalpages/Catherine1.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Catherine2.html', template: path.join(__dirname, './src/pages/personalpages/Catherine2.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/ElisPetr.html', template: path.join(__dirname, './src/pages/personalpages/ElisPetr.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Fedor3.html', template: path.join(__dirname, './src/pages/personalpages/Fedor3.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Ivan5.html', template: path.join(__dirname, './src/pages/personalpages/Ivan5.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Ivan6.html', template: path.join(__dirname, './src/pages/personalpages/Ivan6.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/MihFed.html', template: path.join(__dirname, './src/pages/personalpages/MihFed.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Nikola1.html', template: path.join(__dirname, './src/pages/personalpages/Nikola1.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Nikola2.html', template: path.join(__dirname, './src/pages/personalpages/Nikola2.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Pavel1.html', template: path.join(__dirname, './src/pages/personalpages/Pavel1.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Petr1.html', template: path.join(__dirname, './src/pages/personalpages/Petr1.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Petr2.html', template: path.join(__dirname, './src/pages/personalpages/Petr2.html') },
   { chunks: ['personalpage'], page: 'pages/personalpages/Petr3.html', template: path.join(__dirname, './src/pages/personalpages/Petr3.html') }
]

result.optimization = {
   splitChunks: {
      chunks: "all"
   }
}

module.exports = result;