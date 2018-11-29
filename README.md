# SDK - Dooca Commerce - Plataforma de Loja Virtual

`Ecommerce Api` / `Api de Loja virtual`

## [https://www.dooca.com.br](https://www.dooca.com.br)

# Como usar

```
$ sudo yarn add dooca-sdk
```

```javascript
const dooca = require('dooca-sdk');

dooca.configure({
	mode: 'sandbox',
	shopId: '{shopId}',
	token: '{Token}',
});
```

Exemplo

```javascript
const dooca = require('dooca-sdk');

try {
	const params = {}; // opcional params
	const getData = await dooca.brands.get(params);
	console.log('getData', getData);
} catch (err) {
	console.log(err.toString());
}
```

Ou pelo `getFirst`:

```javascript
const { brands } = require('dooca-sdk');

try {
	const id = 123;
	const getData = await brands.getFirst(id);
	console.log('getData', getData);
} catch (err) {
	console.log(err.toString());
}
```

# Desenvolvimento

### Recursos

-   [brands](#brands)
-   [categories](#categories)
-   [products](#products)
-   [variations](#variations)
-   [attributes](#attributes)
-   [attributeValues](#attributeValues)
-   [stocks](#stocks)
-   [orders](#orders)
-   [fulfillments](#fulfillments)
-   [customers](#customers)

#### <a id="brand"></a>brand

```javascript
const { brand } = require('dooca-sdk');

brand.create({ Object });
brand.get({ Object }); // params { limit:5, offset: 5 }
brand.getFirst(123);
brand.update(id, { Object });
brand.delete(123); // or { id: 123 }
```

#### <a id="categories"></a>category

```javascript
const { category } = require('dooca-sdk');

category.create({ Object });
category.get({ Object }); // params { limit:5, offset: 5 }
category.getFirst(123);
category.getTree({ Object }); // árvore de categorias { limit: 5, offset: 5 }
category.update(id, { Object });
category.delete(123); // or { id: 123 }
```

#### <a id="products"></a>Product

```javascript
const { product } = require('dooca-sdk');

product.create({ Object });
product.get({ Object }); // params { limit:5, offset: 5 }
product.getFirst(123);
product.update(id, { Object });
```

#### <a id="variations"></a>Attributes

```javascript
const { attributes } = require('dooca-sdk');

attributes.create({ Object });
attributes.get({ Object }); // params { limit:5, offset: 5 }
attributes.getFirst(123);
attributes.update(id, { Object });
attributes.delete(123); // or { id: 123 } - (productId as id)
```

#### <a id="variationvalues"></a>Attribute Values

```javascript
const { attributeValues } = require('dooca-sdk');
const variationId = 123;

attributeValues.create(variationId, { Object });
attributeValues.get({ Object }); // params { id: 123, limit:5, offset: 5 } - *required id of variation
attributeValues.getFirst(123); // buscar todos os valores de um atributo
attributeValues.update({ id: productId, valueId: skuId }, { Object });
attributeValues.delete({ id: productId, valueId: skuId });
```

#### <a id="stocks"></a>Stocks

```javascript
const { stocks } = require('dooca-sdk');

stocks.update([{ Object }]); // array de objetos
```

#### <a id="orders"></a>Orders

```javascript
const { orders } = require('dooca-sdk');

orders.get();
orders.getFirst(123);
orders.create({ Object });
orders.update(123, { Object });
```

#### <a id="fulfillments"></a>Fulfillments

```javascript
const { fulfillments } = require('dooca-sdk');

fulfillments.get();
fulfillments.getFirst(123);
fulfillments.create({ Object });
fulfillments.updateStatus(123, 'status', { Object }); // in: attended | invoiced | shipped | delivered
fulfillments.delete(123);
```

#### <a id="customers"></a>Customers

```javascript
const { customers } = require('dooca-sdk');

customers.get();
customers.getFirst(123);
customers.create({ Object });
customers.update(123, { Object });
customers.delete(123);
```
