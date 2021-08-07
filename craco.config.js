/* craco配置文件 */
const path = require("path");

//craco-less
const CracoLessPlugin = require("craco-less");

//拼接路径函数
const pathResolve = dir => path.resolve(__dirname, dir)

module.exports = {
    "webpack": {
        //别名
        "alias": {
            "@": pathResolve("src"),
            "@components": pathResolve("src/components"),
            '@common': pathResolve('src/common'),
            '@pages': pathResolve('src/pages'),
            '@store': pathResolve('src/store'),
            '@utils': pathResolve('src/utils'),
            '@router': pathResolve('src/router'),
            '@assets': pathResolve('src/assets')
        }
    },
    plugins: [
        { plugin: CracoLessPlugin }
    ]
}