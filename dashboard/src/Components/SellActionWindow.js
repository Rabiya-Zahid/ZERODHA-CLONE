import React, { useState } from "react";
import { Link } from "react-router-dom";
import  axios   from  'axios';
import GeneralContext from "./GeneralContext";
import { useNavigate } from "react-router-dom";

const SellActionWindow = ({ uid }) => {
    const navigate = useNavigate();
    const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
const handleSellClick = async   () => {
  try{
await   axios.post("http://localhost:3002/sellOrder",{
    name:uid,
    qty:stockQuantity,
    price:stockPrice,
    mode:"SELL"

    
});
     GeneralContext.closeSellWindow();
}catch (err) {
        navigate("/error",{
         state: {
                message: err.response.data.message,
            },
    });
}
  };
    const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };
return(
  <div
  className="position-fixed top-50 start-50 translate-middle bg-white border rounded shadow p-3"
  style={{ width: "260px"  }}
>

      
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
   

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
    
);
};
export default SellActionWindow;