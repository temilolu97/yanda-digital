
const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last Updated: 12/02/2025</p>

      <p className="mb-6">
        Welcome to Yanda Digital. We are committed to protecting your privacy and ensuring the
        security of your personal information. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your data when you visit our website or make a purchase from us.
      </p>

      <p className="mb-6">
        By accessing or using our website, you agree to the terms of this Privacy Policy. If you do
        not agree with our practices, please do not use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Name</li>
        <li>Email address</li>
        <li>Shipping and billing address</li>
        <li>Phone number</li>
        <li>Payment details (processed securely via payment gateways; we do not store full credit card information)</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">Non-Personal Information</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Browser type and version</li>
        <li>IP address</li>
        <li>Pages visited on our site</li>
        <li>Time and date of visits</li>
        <li>Referring website</li>
      </ul>

      <h3 className="font-semibold text-lg mb-2">Cookies and Tracking Technologies</h3>
      <p className="mb-6">
        We use cookies and similar tracking technologies to enhance your browsing experience,
        analyze website traffic, and personalize content. You can disable cookies in your browser
        settings, but some features of our website may not function properly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>To process and fulfill your orders</li>
        <li>To communicate with you regarding your purchases, account, or customer service inquiries</li>
        <li>To improve our website, products, and services</li>
        <li>To prevent fraud and enhance security</li>
        <li>To send promotional emails (only with your consent; you may opt out anytime)</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Share Your Information</h2>
      <p className="mb-2">We do not sell or rent your personal information to third parties. However, we may share data with:</p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Payment processors (to complete transactions)</li>
        <li>Shipping carriers (to deliver your orders)</li>
        <li>Service providers (for website hosting, analytics, and marketing)</li>
        <li>Legal authorities (if required by law or to protect our rights)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
      <p className="mb-6">
        We implement industry-standard security measures to protect your personal information from
        unauthorized access, alteration, or disclosure. However, no online transmission is 100% secure,
        so we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights & Choices</h2>
      <p className="mb-2">Depending on your location, you may have the right to:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Access, update, or delete your personal information</li>
        <li>Opt out of marketing communications</li>
        <li>Restrict or object to data processing</li>
        <li>Request a copy of your data</li>
      </ul>
      <p className="mb-6">
        To exercise these rights, contact us at <a href="mailto:info@yangedigital.com" className="text-blue-600 underline">info@yangedigital.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Links</h2>
      <p className="mb-6">
        Our website may contain links to third-party sites. We are not responsible for their privacy
        practices, so we encourage you to review their policies before providing any personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children’s Privacy</h2>
      <p className="mb-6">
        Our services are not intended for children under 13 (or the applicable age in your jurisdiction).
        We do not knowingly collect data from minors without parental consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy periodically. Any changes will be posted on this page with
        an updated revision date. Continued use of our website constitutes acceptance of the revised policy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
