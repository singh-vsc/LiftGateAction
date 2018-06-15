module.exports = {
  
  'http.commerce.catalog.storefront.products.getProducts.before': {
      actionName: 'http.commerce.catalog.storefront.products.getProducts.before',
      customFunction: require('./domains/commerce.catalog.storefront.products/http.commerce.catalog.storefront.products.getProducts.before')
  },
  
  'http.commerce.catalog.storefront.products.getProducts.after': {
      actionName: 'http.commerce.catalog.storefront.products.getProducts.after',
      customFunction: require('./domains/commerce.catalog.storefront.products/http.commerce.catalog.storefront.products.getProducts.after')
  }
};
