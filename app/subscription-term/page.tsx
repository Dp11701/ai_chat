export default function RefundPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold  mb-8 text-white">Subscription Term</h1>
      <div className="prose prose-lg max-w-none flex flex-col gap-4">
        <p className="text-lg font-bold text-white text-[14px] md:text-[28px]">
          Auto Renewing Subscriptions:
        </p>
        <p className="text-white text-[14px] md:text-[20px]">
          • Subscribed users have <strong>unlimited access</strong> to the App's
          translation services, including speech-to-text recognition,
          translation, and text-to-speech.
        </p>
        <p className="text-white text-[14px] md:text-[20px]">
          • Unsubscribed users can only use these services with a{" "}
          <strong>limited quota per day</strong>.
        </p>
        <p className="text-white text-[14px] md:text-[20px]">
          • Payment will be charged to your <strong>iTunes Account</strong> at
          confirmation of purchase.
        </p>
        <p className="text-white text-[14px] md:text-[20px]">
          • Subscription <strong>automatically renews</strong> unless auto-renew
          is turned off at least 24-hours before the end of the current period.
        </p>
        <p className="text-white text-[14px] md:text-[20px]">
          • Account will be charged for renewal{" "}
          <strong>within 24-hours prior</strong> to the end of the current
          period, and the cost of the renewal will be identified.
        </p>
        <p className="text-white text-[14px] md:text-[20px]">
          • Subscriptions may be <strong>managed by the user</strong>, and
          auto-renewal may be turned off by going to the user’s Account Settings
          after purchase.
        </p>
        <p className="text-white text-[14px] md:text-[20px]">
          • Any <strong>unused portion of a free trial</strong> period, if
          offered, will be forfeited when the user purchases a subscription to
          that publication, where applicable.
        </p>
      </div>
    </div>
  );
}
