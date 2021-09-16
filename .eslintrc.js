module.exports={
    "env": {
        "es6": true
    },
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "requireConfigFile": false
    },
    "plugins": [
        "@babel"
    ],
    "extends": [
        "react-app"
    ],
    "rules": {
        "curly": "warn",
        "indent": "off",
        "no-unused-vars": "off",
        "no-mixed-operators": "off",
        "no-mixed-spaces-and-tabs": ["warn","smart-tabs"]
    }
}