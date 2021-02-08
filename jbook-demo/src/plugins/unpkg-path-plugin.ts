import * as esbuild from 'esbuild-wasm';
import axios from 'axios';

export const unpkgPathPlugin = () => {

  /* NOTES & URL MANIPULATION ALGORITHMS
  - Listener function waiting to intercept ESBuild's 'onResolve' call request, which overwrites ESBuild's default query to the local hard drive 
  - onResolve() will be called anytime a request is made for a specific NPM file
  */

  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log('onResolve', args);
        if (args.path === 'index.js') {
          return { path: args.path, namespace: 'a' };
        }

        /*
        If requested file location is relative/nested, return an object with a new manipulated URL.
        */
        if (args.path.includes('./') || args.path.includes('../')) {
          return {
            namespace: 'a',
            path: new URL(
              args.path,
              'https://unpkg.com' + args.resolveDir + '/').href
          };
        }
        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`
        };
      });

      /* NOTES
      - Listener to intercept ESBuild's 'onLoad' call requests, and send back custom an object containing the filepath with the content ESBuild requested from the 'onResolve' method 

      * The `URL` utility class inside browser environments, produces an instance that can dynamically combine a URL domain & the file/module that has been requested for download. 
      */

      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log('onLoad', args);

        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: `
              import axios from 'axios';
              console.log(React);
            `
          };
        }
        const { data, request } = await axios.get(args.path);
        console.log(request);
        return {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname
        };
      });
    },
  };
};