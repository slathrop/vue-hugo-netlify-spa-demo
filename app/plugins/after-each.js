export default async ({ app }) => {

  app.router.afterEach((to, from) => {
      AOS.init();
      setTimeout(() => {
          AOS.refreshHard();
      }, 1000);
  });


//   app.router.beforeEach((to, from) => {
//       AOS.init();
//       AOS.refresh();
//   });

}