export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold  mb-8 text-white">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white mb-6">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="text-white">customer@begamob.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Phone</h3>
              <p className="text-white">+84 985 369 578</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">Address</h3>
              <p className="text-white">
                Begamob Global Limited
                <br />
                info@begamob.com
                <br />
                Rm 308 3/F CHEVALIER HSE
                <br />
                45-51 CHATHAM RD S 尖沙咀 Hong Kong
              </p>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
