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


# Caching for Performance
- To reduce the amount of requests made to `unpkg.com`, a caching layer is implemented.
- To implement the caching layer, 'localForage' library can offer more storage space than a traditional browsers local storage.

# Executing User Provided Code in the Browser
- The application will utilize a HTML `iframe` element, to execute the code that was provided by the user to the `iframe`'s parent element.
- Direct communication between the `iframe` and the parent will be disabled as a security measure.
- In order to facilitate communication between the parent element and the child element, event listeners placed on both elements. 
- An event listener placed on the child that can be configured to respond to a specific event emitted from the parent & vice versa.
- When the user submits code to the parent element, an event will fire off on the child element, which will execute the code providede to it by the parent. 

*Monaco editor will be the open-source browser editor the application provides*
  - This imported code editor will be wrapped in a React component, and therefore special configuration settings will be made to both the editor and the React component wrapping the editor. 

# Errors w/User Provided Code
- There are 3 main classes of errors that can occur when executing a user's code:
  1. Bundling/Syntax Error.
  2. Synchronous Error during execution.
  3. Asynchronous Error(setTimeout).

