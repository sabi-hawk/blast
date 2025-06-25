import { Button, Row } from "antd";

export default function Features() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Row className="bg-[#ededed] p-[14px_35px] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="/assets/images/logo.png"
            alt="Blast Logo"
            height={50}
            width={50}
          />
          <h1 className="font-ubuntu text-[22px] text-[#545455]">BLAST</h1>
        </div>
        <nav>
          <ul className="list-none flex gap-5">
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="/features" className="text-blue-600 font-semibold">
                Features
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2.5">
          <a href="/signup">
            <Button>Create Account</Button>
          </a>
          <a href="/login">
            <Button type="primary">Login</Button>
          </a>
        </div>
      </Row>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for Modern Email Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your email
              campaigns in one intuitive platform
            </p>
          </div>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Drag & Drop Email Builder */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Drag & Drop Email Builder
              </h3>
              <p className="text-gray-600 mb-4">
                Create stunning emails with our intuitive visual editor. No
                coding required - just drag, drop, and design.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Pre-built templates and components</li>
                <li>• Real-time preview</li>
                <li>• Mobile-responsive design</li>
                <li>• Custom branding options</li>
              </ul>
            </div>

            {/* Email Templates */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Custom Email Templates
              </h3>
              <p className="text-gray-600 mb-4">
                Save and reuse your best-performing email designs. Create a
                library of templates for consistent branding.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Template library management</li>
                <li>• Version control</li>
                <li>• Team collaboration</li>
                <li>• Template categories</li>
              </ul>
            </div>

            {/* Lead Management */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Lead Management System
              </h3>
              <p className="text-gray-600 mb-4">
                Import, organize, and segment your contacts with powerful lead
                management tools.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• CSV/Excel import</li>
                <li>• Contact segmentation</li>
                <li>• Lead scoring</li>
                <li>• Duplicate detection</li>
              </ul>
            </div>

            {/* Campaign Scheduler */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Campaign Scheduler
              </h3>
              <p className="text-gray-600 mb-4">
                Schedule your campaigns for optimal delivery times and automate
                your email marketing workflow.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Time zone optimization</li>
                <li>• A/B testing</li>
                <li>• Drip campaigns</li>
                <li>• Smart scheduling</li>
              </ul>
            </div>

            {/* In-App Chat */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                In-App Chat Module
              </h3>
              <p className="text-gray-600 mb-4">
                Engage with your customers in real-time through our integrated
                chat system.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Real-time messaging</li>
                <li>• Chat history</li>
                <li>• File sharing</li>
                <li>• Team collaboration</li>
              </ul>
            </div>

            {/* Analytics Dashboard */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Analytics & Stats Dashboard
              </h3>
              <p className="text-gray-600 mb-4">
                Track performance with detailed analytics and insights to
                optimize your campaigns.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Open rate tracking</li>
                <li>• Click-through rates</li>
                <li>• Bounce analysis</li>
                <li>• ROI reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Features
            </h2>
            <p className="text-lg text-gray-600">
              Take your email marketing to the next level with these powerful
              tools
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Personalization Engine
              </h3>
              <p className="text-gray-600 mb-4">
                Create highly personalized emails using dynamic content, merge
                tags, and behavioral triggers.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Dynamic content insertion</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Behavioral targeting</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Custom merge fields</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Automation Workflows
              </h3>
              <p className="text-gray-600 mb-4">
                Set up sophisticated automation sequences that nurture leads and
                convert prospects.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Welcome series</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Abandoned cart recovery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Re-engagement campaigns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Preview */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Free, Scale as You Grow
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-4">Starter</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">Free</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>1,000 emails/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
              <Button type="primary" className="w-full">
                Get Started Free
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-blue-500 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">Professional</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                $29<span className="text-lg text-gray-500">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>50,000 emails/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <Button type="primary" className="w-full">
                Start Free Trial
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                Custom
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Unlimited emails</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Button type="default" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses using Blast to power their email
            marketing
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/signup">
              <Button
                size="large"
                className="bg-white text-blue-600 border-white hover:bg-gray-100"
              >
                Start Free Trial
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="large"
                className="bg-white text-blue-600 border-white hover:bg-gray-100"
              >
                Schedule Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 