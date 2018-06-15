module.exports = {
  
  'embedded.commerce.orders.price.before': {
      actionName: 'embedded.commerce.orders.price.before',
      customFunction: require('./domains/commerce.orders/embedded.commerce.orders.price.before')
  },
  
  'embedded.commerce.orders.price.after': {
      actionName: 'embedded.commerce.orders.price.after',
      customFunction: require('./domains/commerce.orders/embedded.commerce.orders.price.after')
  }
};
