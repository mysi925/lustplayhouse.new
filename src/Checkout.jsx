import React, { useEffect, useRef } from "react";

export default function Checkout() {
  const cardRef = useRef(null);

  useEffect(() => {
    async function init() {
      const payments = window.Square.payments(
        "sandbox-sq0idb-fPrH7ROx9D-8SkQUIkldbQ",
        "US"
      );

      const card = await payments.card();
      await card.attach(cardRef.current);

      document.getElementById("pay-btn").onclick = async () => {
        const result = await card.tokenize();

        if (result.status !== "OK") {
          alert("Card failed");
          return;
        }

        const res = await fetch("https://lustplayhouse.cloud/create-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sourceId: result.token,
            amount: 1000
          })
        });

        const data = await res.json();

        console.log(data);
        alert("Payment success (sandbox)");
      };
    }

    init();
  }, []);

  return (
    <div className="mt-6">
      <div ref={cardRef} />

      <button id="pay-btn">
        Pay Now
      </button>
    </div>
  );
}
