const getEle = (id) => document.getElementById(id);

let prodsList = [];

const mapData = (data) => {
  if (data) {
    let list = [];
    for (let i = 0; i < data.length; i++) {
      let newProds = new Product(
        data[i].id,
        data[i].name,
        data[i].price,
        data[i].screen,
        data[i].backCamera,
        data[i].frontCamera,
        data[i].img,
        data[i].desc,
        data[i].type
      );
      list.push(newProds);
    }
    return list;
  }
};

const getProductsList = async () => {
  let response = await fetch(
    "https://62bdd5cfbac21839b60c0579.mockapi.io/api/phones",
    { method: "GET" }
  );
  let prods = await response.json();

  prodsList = mapData(prods);

  renderProductsList(prodsList);
};
getProductsList();

const renderProductsList = (data) => {
  let contentHTML = "";

  for (let i = 0; i < data.length; i++) {
    contentHTML += ` 
          <tr>
            <td>${i + 1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].type}</td>
            <td>${data[i].price}</td>
            <td>
                <img width="50px" src="${data[i].img} " alt="${data[i].name}"/>
            </td>
            <td>${data[i].screen} - BackCamera: ${
      data[i].backCamera
    } - FrontCamera: ${data[i].frontCamera} - ${data[i].desc}</td>
            <td> 
            <button onclick="getProduct(${
              data[i].id
            })" class="btn btn-primary">Update</button>
              <button onclick="deleteProduct(${
                data[i].id
              })" class="btn btn-danger">Delete</button>
            </td>`;
  }
  getEle("ProductListTable").innerHTML = contentHTML;
};

const getProduct = (id) => {};

const deleteProduct = (id) => {};

const createProduct = () => {};
