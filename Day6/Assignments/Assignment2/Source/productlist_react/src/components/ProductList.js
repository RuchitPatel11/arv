const ProductList = (props) => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          {props.product.map((item) => (
            <div className="card text-black col-md-4" key={item.name}>
              <img src={item.img} className="card-img-top" alt="" />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title fs-4">{item.name}</h5>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Quantity:</span>
                    <span>{item.quantity}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Price:</span>
                    <span>₹ {item.price}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Grand Total:</span>
                    <span>₹ {item.Gross}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Discount:</span>
                    <span>- ₹ {item.discount}</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between total font-weight-bold fs-4 mt-4 bg-secondary p-3 text-white">
                  <span>Total:</span>
                  <span>₹ {item.payable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
