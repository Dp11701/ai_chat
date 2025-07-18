export default function Chat() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Chat AI</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-600 mb-6">
          Welcome to our AI Chat interface. This is a sample page where you can
          implement your AI chat functionality.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 mb-6 h-96 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-emerald-500 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-sm font-bold">AI</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-gray-800">
                  Hello! How can I help you today?
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 justify-end">
              <div className="bg-blue-500 rounded-lg p-3 shadow-sm text-white">
                <p>This is a sample chat interface.</p>
              </div>
              <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-gray-600 text-sm font-bold">U</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          />
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
