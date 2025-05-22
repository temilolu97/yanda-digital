import React from 'react'

const RefundPolicy = () => {
  return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Refund and Returns Policy</h1>
      <p className="text-sm text-gray-500 text-center mb-10">Last Updated: 12/05/2025</p>

      <p className="mb-6">
        At <strong>Yanda Digital</strong>, we strive to ensure your complete satisfaction with every purchase. 
        If you’re not entirely happy with your order, our Refund & Return Policy outlines the process for 
        returns, exchanges, and refunds.
      </p>

      {/* 1. Eligibility */}
      <h2 className="text-xl font-semibold mt-8 mb-3">1. Eligibility for Returns & Refunds</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>✅ Defective or Damaged Items</strong> – If your product arrives damaged, faulty, or not as described.</li>
        <li><strong>✅ Wrong Item Shipped</strong> – If you received an incorrect product.</li>
        <li><strong>✅ Unopened & Unused Items</strong> – Returned in original packaging with all accessories within 5 days.</li>
        <li><strong>❌ Non-Returnable Items</strong> – Certain products (e.g., software, personalized items, opened consumables) may not be eligible.</li>
      </ul>

      {/* 2. Return Process */}
      <h2 className="text-xl font-semibold mt-8 mb-3">2. Return Process</h2>
      <ol className="list-decimal list-inside space-y-4 mb-6">
        <li>
          <strong>Request a Return</strong><br />
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Contact our support team within 5 days of delivery.</li>
            <li>Provide your order number, product details, and reason for return.</li>
            <li>We may request photos/videos of damaged/defective items.</li>
          </ul>
        </li>
        <li>
          <strong>Return Authorization (RMA)</strong><br />
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>If approved, we’ll issue a Return Merchandise Authorization (RMA) number and instructions.</li>
            <li>Returns without an RMA may be rejected.</li>
          </ul>
        </li>
        <li>
          <strong>Ship the Item Back</strong><br />
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Pack the item securely in original packaging with all accessories.</li>
            <li>Ship to the provided return address using a trackable method.</li>
            <li>You cover return shipping unless the return is due to our error.</li>
          </ul>
        </li>
        <li>
          <strong>Refund or Exchange</strong><br />
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Once received and inspected, we’ll process your:</li>
            <li><strong>Refund:</strong> Issued to the original payment method within 14 business days.</li>
            <li><strong>Exchange:</strong> Shipped once the return is approved.</li>
          </ul>
        </li>
      </ol>

      {/* 3. Refund Conditions */}
      <h2 className="text-xl font-semibold mt-8 mb-3">3. Refund Conditions</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Refunds exclude original shipping fees (unless return is due to our mistake).</li>
        <li>Restocking fees (if applicable) may apply for non-defective returns.</li>
        <li>Store credit may be offered at our discretion.</li>
      </ul>

      {/* 4. Warranty Claims */}
      <h2 className="text-xl font-semibold mt-8 mb-3">4. Warranty Claims</h2>
      <p className="mb-6">
        Some electronics come with a manufacturer’s warranty. Contact us for assistance with warranty claims.
      </p>

      {/* 5. Exchanges */}
      <h2 className="text-xl font-semibold mt-8 mb-3">5. Exchanges</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Exchanges are subject to product availability.</li>
        <li>If the replacement is unavailable, we’ll issue a refund.</li>
      </ul>

      {/* 6. Non-Returnable Situations */}
      <h2 className="text-xl font-semibold mt-8 mb-3">6. Non-Returnable Situations</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>❌ Items damaged due to misuse, neglect, or unauthorized modifications.</li>
        <li>❌ Products without original packaging or proof of purchase.</li>
        <li>❌ Opened software, digital downloads, or personalized items.</li>
      </ul>
    </div>
  )
}

export default RefundPolicy