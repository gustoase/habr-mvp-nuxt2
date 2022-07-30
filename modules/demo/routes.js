export default (routes, resolve) => {
  routes.push({
    name: 'demo.list',
    path: '/list',
    component: resolve(__dirname, 'pages/list'),
    chunkName: 'demo/list'
  });
};
