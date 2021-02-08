# TS App Notes

# Application Description:

- A CLI to launch an interactive development environment inside their browser, for writting & documenting code.

**3 Big Challenges**

1. The code will be provided to the user's browser as a string. we have to execute it safely; address security of executing user provided code.
2. The code written by the user may have JSX syntax that the user's browser can't execute, we will need to do some pre-processing of the code first.
3. The code written might have import statements for other JS files or CSS files; we must handle import statements prior to executing the written code.

# Code Transpiling in the Browser

- A transpiler(Babel!) will be used as a pre-processor of the raw code the is first written by the user, it will then send the supported code to be executed in the browser.
- I will use the Webpack Bundler to connect my modules.

# Customized Bundler Process w/ ES Build

1. Read the contents of the entry file (index.js).
2. All of the import/export statements that are detected.
# 3. Locate all NPM module imports made by user, and include the imports in the final bundle.
  # - A small plug-in named "npm-install-webpack-plugin", will be used to overwrite Webpack's default protocol, and load module from NPM instead of the local drive.
4. Lastly the bundler will link these files together into a single output file(main.js), with all values beings correctly communicated around.

**<>ES Build is a single tool that can safely transpile & bundle our code in all browsers<>**
  - Because we can't reach out directly from a browser to the npm directory(CORS violation), we will use the third-party libray called "UNPKG", 
    which can provide the same source code as what is hosted on the NPM Registry.
 
# Demo ESBuild Plugin - jbook-demo
  **_SEE NOTES w/CODE IN `jbook-demo` APP_**