module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/medods-client-form/'
        : '/',
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'Добавление клиента'
        }
    }
}
