/**
 * Implementation for embedded.commerce.orders.price.before

 * This custom function will receive the following context object:
{
  "exec": {
    "setItemAllocation": {
      "parameters": [
        {
          "name": "allocationId",
          "type": "number"
        },
        {
          "name": "expiration",
          "type": "date"
        },
        {
          "name": "productCode",
          "type": "string"
        },
        {
          "name": "itemId",
          "type": "string"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.orderItem"
      }
    },
    "setAttribute": {
      "parameters": [
        {
          "name": "fqn",
          "type": "string"
        },
        {
          "name": "values",
          "type": "object"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.order"
      }
    },
    "removeAttribute": {
      "parameters": [
        {
          "name": "fqn",
          "type": "string"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.order"
      }
    },
    "setData": {
      "parameters": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "object"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.order"
      }
    },
    "removeData": {
      "parameters": [
        {
          "name": "key",
          "type": "string"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.order"
      }
    },
    "setItemData": {
      "parameters": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "object"
        },
        {
          "name": "itemId",
          "type": "string"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.orderItem"
      }
    },
    "removeItemData": {
      "parameters": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "itemId",
          "type": "string"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.orderItem"
      }
    },
    "setDutyAmount": {
      "parameters": [
        {
          "name": "dutyAmount",
          "type": "number"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.order"
      }
    },
    "setHandlingAmount": {
      "parameters": [
        {
          "name": "handlingAmount",
          "type": "number"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.order"
      }
    },
    "setItemHandlingAmount": {
      "parameters": [
        {
          "name": "handlingAmount",
          "type": "number"
        },
        {
          "name": "itemId",
          "type": "string"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.order.order"
      }
    }
  },
  "get": {
    "order": {
      "parameters": [],
      "return": {
        "type": "mozu.commerceRuntime.contracts.orders.order"
      }
    }
  }
}


 */
var Client = require('mozu-node-sdk/clients/commerce/order');
module.exports = function(context, callback) {
  console.log(context.get.order());
  var order = context.get.order();
  if(order.orderNumber == null) {
      console.log(context.configuration.orderId);
      /*var urlArr = context.request.url.split('/');
      var orderId = urlArr[urlArr.length - 1];*/
  } else {
    console.log('order is : '+order.orderNumber);
  }
  /*var dutyAmt = 0;
  for(var i = 0; i < context.get.order().attributes.length; i++){
    var attr = context.get.order().attributes[i];
    if(attr.fullyQualifiedName == 'tenant~lift-gate' && attr.values[0] == 'True'){
      dutyAmt = 59;
      break;
    }
  }
  console.log(dutyAmt);
  context.exec.setDutyAmount(dutyAmt);
  console.log('Implementation for embedded.commerce.orders.price.before');*/
  callback();
};