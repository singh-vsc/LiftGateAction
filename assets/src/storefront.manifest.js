module.exports = {
  
  'http.storefront.pages.category.request.before': {
      actionName: 'http.storefront.pages.category.request.before',
      customFunction: require('./domains/storefront/http.storefront.pages.category.request.before')
  },
  
  'http.storefront.pages.category.request.after': {
      actionName: 'http.storefront.pages.category.request.after',
      customFunction: require('./domains/storefront/http.storefront.pages.category.request.after')
  },
  
  'http.storefront.pages.cart.request.before': {
      actionName: 'http.storefront.pages.cart.request.before',
      customFunction: require('./domains/storefront/http.storefront.pages.cart.request.before')
  },
  
  'http.storefront.pages.cart.request.after': {
      actionName: 'http.storefront.pages.cart.request.after',
      customFunction: require('./domains/storefront/http.storefront.pages.cart.request.after')
  },
  'liftgateCustom': {
      actionName:'http.storefront.routes',
      customFunction: require('./domains/storefront/liftgateCustom')
    }
};
