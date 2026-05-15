import Script from 'next/script'

export default function ElfsightChatbot() {
  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />
      <div className="elfsight-chatbot-anchor fixed bottom-6 left-6 z-50">
        <div
          className="elfsight-app-239786f6-5373-494a-97c9-b79b6b42db2c"
          data-elfsight-app-lazy
        />
      </div>
    </>
  )
}
