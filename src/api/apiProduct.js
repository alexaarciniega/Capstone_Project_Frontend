const URL_SERVER = "http://localhost:8000/product/";

export const getAllProduct = async () => {
  try {
    const res = await fetch(URL_SERVER);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await fetch(URL_SERVER + id);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (product) => {
  try {
    const res = await fetch(URL_SERVER, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (id, product) => {
  try {
    const res = await fetch(URL_SERVER + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};


export const deleteProduct = async (id) => {
  console.log(id)
  try {
    const res = await fetch(URL_SERVER + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};