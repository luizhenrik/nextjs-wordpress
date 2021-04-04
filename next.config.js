const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    browserslist: [
        "last 2 versions",
        "> 1%",
        "not ie 11",
        "not dead",
        "not op_mini all"
    ]
}
