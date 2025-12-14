import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="w-full max-w-4xl mx-auto px-6 py-12 sm:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 sm:px-12 sm:py-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-white dark:bg-gray-200 rounded-full flex items-center justify-center shadow-lg mb-6 overflow-hidden">
                <Image
                  src="https://github.com/user-attachments/assets/05cb4fe4-e7ec-4866-ae3a-8a4846a60f2e"
                  alt="Profile picture"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                やしきん
              </h1>
              <p className="text-xl text-blue-100">
                クラウドエンジニア
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-12 sm:px-12">
            {/* About Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3 text-3xl">👤</span>
                プロフィール
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">出身地</p>
                  <p className="text-xl font-semibold text-gray-800 dark:text-white">大分</p>
                </div>
                <div className="bg-purple-50 dark:bg-gray-700 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">住まい</p>
                  <p className="text-xl font-semibold text-gray-800 dark:text-white">福岡</p>
                </div>
              </div>
            </section>

            {/* Hobbies Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3 text-3xl">🎨</span>
                趣味
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-3">🎨</div>
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">お絵描き</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-3">💡</div>
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">IoT開発</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-4xl mb-3">🎸</div>
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">ギター</p>
                </div>
              </div>
            </section>

            {/* Social Links Section */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="mr-3 text-3xl">🔗</span>
                SNS
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://x.com/yashiki0520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>@yashiki0520</span>
                </a>
                <a
                  href="https://github.com/naka520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>naka520</span>
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  );
}
