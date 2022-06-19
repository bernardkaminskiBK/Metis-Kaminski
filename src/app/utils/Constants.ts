export class Constants {
  public static AZ: string = 'A-Z';
  public static ZA: string = 'Z-A';

  public static api = '/api/';
  public static endpoints = {
    products: {
      list: 'v1/lessons/product/GetProducts',
      getById: 'v1/lessons/product/GetProductById',
      createProduct: '/v1/lessons/product/CreateProduct',
      updateProduct: 'v1/lessons/product/UpdateProduct/',
      deleteProduct: 'v1/lessons/product/RemoveProduct/'
    }
  };

}
