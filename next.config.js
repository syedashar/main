const NextFederationPlugin = require("@module-federation/nextjs-mf");
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    logistic: `logistic@https://tabseralogistics.netlify.app/_next/static/${location}/remoteEntry.js`,
    product: `product@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    order: `order@http://localhost:3003/_next/static/${location}/remoteEntry.js`,
    promotions: `promotions@http://localhost:3004/_next/static/${location}/remoteEntry.js`,
    warehouses: `warehouses@http://localhost:3005/_next/static/${location}/remoteEntry.js`,
    financial: `financial@http://localhost:3006/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = {
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
