module.export = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      "vue"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-var": [
            "error"
        ],
        "no-undef": [
            "error"
        ],

        // "indent": [
        //     "off",
        //     4
        // ],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        // "quotes": [
        //     "off",
        //     "single"
        // ],
        // "semi": [
        //     "off",
        //     "always"
        // ]
    }
}
