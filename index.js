var Elixir = require('laravel-elixir');
if(Elixir.config.js.browserify.transformers){
    Elixir.config.js.browserify.transformers.push({
        name: 'vueify',

        // https://github.com/vuejs/vueify#usage
        options: {}
    });
}