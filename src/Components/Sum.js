import { useEffect, useState } from "react";

function Sum() {
  let sumArr = [];

  const API = process.env.REACT_APP_API_URL;
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((response) => response.json())
      .then((responseJSON) => setTransaction(responseJSON))
      .catch((error) => console.error(error));
  }, [API,transaction]);

  for (let price of transaction) {
    sumArr.push(price.amount);
  }
  return (
    <>
      <h2>
        Total Spent:{" "}
        <span>
          $
          {sumArr.length > 0
            ? sumArr.reduce((a, b) => {
                return Number(a) + Number(b);
              })
            : ""}
          .00
        </span>
      </h2>
    </>
  );
}
export default Sum;
