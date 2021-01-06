import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@home/samplemfs",
  
  app: () => System.import("@home/samplemfs"),
  activeWhen: ["/"],
  customProps: (name, location) => {
    return { sampleprops: "sample text for props", };
  }
});

start({
  urlRerouteOnly: true,
});


