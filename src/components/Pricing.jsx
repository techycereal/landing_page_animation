export default function Pricing() {
  return (
    <div id='pricing' className="bg-white py-20 px-4 md:px-10 lg:px-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {[1, 2, 3].map((plan) => (
          <div
            key={plan}
            className="bg-gray-200 p-6 rounded-lg text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {plan === 1
                ? "Basic Plan"
                : plan === 2
                ? "Standard Plan"
                : "Premium Plan"}
            </h3>
            <p className="text-4xl font-bold mb-4">
              ${plan === 1 ? "19.99" : plan === 2 ? "29.99" : "49.99"} / month
            </p>
            <ul className="mb-6 text-sm md:text-md lg:text-lg">
              <li>
                Speed:{" "}
                {plan === 1
                  ? "100 Mbps"
                  : plan === 2
                  ? "300 Mbps"
                  : "1 Gbps"}
              </li>
              <li>
                Data:{" "}
                {plan === 1 ? "500 GB" : plan === 2 ? "1 TB" : "Unlimited"}
              </li>
              <li>
                Support:{" "}
                {plan === 1
                  ? "Email"
                  : plan === 2
                  ? "Phone & Email"
                  : "24/7"}
              </li>
            </ul>
            <button className="price_button bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}