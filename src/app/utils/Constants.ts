export class Constants {
  public static AZ: string = 'A-Z';
  public static ZA: string = 'Z-A';

  public static api = '/api/';

  public static endpoints = {
    products: {
      list: 'v1/lessons/product/GetProducts',
      getById: 'v1/lessons/product/GetProductById',
      createProduct: 'v1/lessons/product/CreateProduct',
      updateProduct: 'v1/lessons/product/UpdateProduct',
      deleteProduct: 'v1/lessons/product/RemoveProduct',
    },
    productsAuth: {
      list: 'v1/auth/lessons/product/GetProducts',
      getById: 'v1/auth/lessons/product/GetProductById',
      createProduct: 'v1/auth/lessons/product/CreateProduct',
      updateProduct: 'v1/auth/lessons/product/UpdateProduct',
      deleteProduct: 'v1/auth/lessons/product/RemoveProduct'
    },
    user: {
      login: 'https://angularkurz.itcooking.eu/api/user/authenticate',
      createReview: 'https://angularkurz.itcooking.eu/api/v1/lessons/product/CreateReview',
      logout: 'user/logout'
    }
  };

  public static addProductSuccessMsg = 'Your product was successfully added to the list of products.';
  public static addProductFailureMsg = 'Something went wrong, your product was not added to the product list.';

  public static updateProductSuccessMsg = 'Your product was successfully updated in the list of products.';
  public static updateProductFailureMsg = 'Something went wrong, your product was not updated in the product list.';

  public static deleteProductSuccessMsg = 'Your product was successfully deleted from the list of products.';
  public static deleteProductFailureMsg = 'Something went wrong, your product was not deleted from the product list.';

  public static failedLoginMsg = 'Username or password is incorrect';

  public static successAddedCommentMsg = 'Your comment was successfully added.';
  public static failedAddedCommentMsg = 'Oops something went wrong...';

}
