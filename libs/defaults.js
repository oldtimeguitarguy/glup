module.exports = {
    sass: {},
    autoprefixer: {},
    jshint: {
        esversion: 6
    },
    plumber: {},
    php: {
        base: 'public',
        hostname: '127.0.0.1',
        port: '8000'
    },
    paths: {
        pub: 'pub.json',
        sources: {
            sass: 'resources/assets/sass/app.sass',
            scripts: 'resources/assets/scripts/**/*.js'
        },
        builds: {
            sass: {
                base: 'public',
                filename: 'app.css'
            },
            scripts: {
                base: 'public',
                filename: 'app.js'
            }
        },
        watch: {
            scripts: 'resources/assets/scripts/**/*.js',
            sass: 'resources/assets/sass/**/*.sass',
            reloaders: [
                'public/assets/templates/**/*.html',
                'resources/views/**/*.blade.php',
                'public/builds/local/scripts/app.js'
            ]
        }
    }
};
