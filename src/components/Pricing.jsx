export default function Pricing(){
    return (
        <div id='pricing' className="bg-white py-20 px-10">
  <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-gray-200 p-6 rounded-lg text-center">
      <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
      <p className="text-4xl font-bold mb-4">$19.99/month</p>
      <ul className="mb-6">
        <li>Speed: 100 Mbps</li>
        <li>Data: 500 GB</li>
        <li>Support: Email</li>
      </ul>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Select Plan</button>
    </div>
    <div className="bg-gray-200 p-6 rounded-lg text-center">
      <h3 className="text-2xl font-semibold mb-4">Standard Plan</h3>
      <p className="text-4xl font-bold mb-4">$29.99/month</p>
      <ul className="mb-6">
        <li>Speed: 300 Mbps</li>
        <li>Data: 1 TB</li>
        <li>Support: Phone & Email</li>
      </ul>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Select Plan</button>
    </div>
    <div className="bg-gray-200 p-6 rounded-lg text-center">
      <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
      <p className="text-4xl font-bold mb-4">$49.99/month</p>
      <ul className="mb-6">
        <li>Speed: 1 Gbps</li>
        <li>Data: Unlimited</li>
        <li>Support: 24/7</li>
      </ul>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Select Plan</button>
    </div>
  </div>
</div>
    )
}