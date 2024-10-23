import axios from 'axios';

async function fetchProducts() {
  try {
    const response = await axios.get('https://your-api-endpoint.com/list/product', {
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if required, like authorization
      },
    });

    const data = response.data;
    console.log(data); // Handle the response data as needed

    // Example of accessing product data
    if (data.results.length > 0) {
      const product = data.results[0];
      console.log(`Product Title: ${product.title}`);
      console.log(`Price: ${product.price}`);
      console.log(`Images: ${product.images.map(img => img.image).join(', ')}`);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchProducts();
