const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        'js/main.min':
            ['./js/main.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
            'vue-paginate$': 'vue-paginate/dist/vue-paginate.min.js',
        },
    },
};

module.exports = config;
