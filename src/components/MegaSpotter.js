import React from 'react';

const MegaSpotterKanban = () => {
  const items = [
    {
      href: "https://us.pandora.net/en/gifts/featured-gifting/gift-sets/#contentID=5ce3aea8-6e28-4621-9b13-3e7a85d2b31f&type=Mega Spotter&name=12/25 EOSS Megaspotter US",
      title: "Up to 50% off Gift Sets",
      imgSrc: "//cdn.media.amplience.net/i/pandora/Q424_G_Giftsets_Box_07_Sleeve_Ribbon_RGB?fmt=auto&qlt=60&crop={16.05%},{46.75%},{26.7%},{40.05%}",
      buttonText: "Up to 50% off Gift Sets",
    },
    {
      href: "https://us.pandora.net/en/engravable-jewelry/#contentID=5ce3aea8-6e28-4621-9b13-3e7a85d2b31f&type=Mega Spotter&name=12/25 EOSS Megaspotter US",
      title: "Engravable Jewelry",
      imgSrc: "//cdn.media.amplience.net/i/pandora/Engravable_1?fmt=auto&qlt=60&crop={0%},{27.14%},{97.78%},{55%}",
      buttonText: "Engravable Jewelry",
    },
    {
      href: "https://us.pandora.net/en/collections/pandora-lab-grown-diamonds/#contentID=5ce3aea8-6e28-4621-9b13-3e7a85d2b31f&type=Mega Spotter&name=12/25 EOSS Megaspotter US",
      title: "Up to 50% off select diamond styles",
      imgSrc: "//cdn.media.amplience.net/i/pandora/Q424_Holiday_Product_Diamonds_ring_RGB?fmt=auto&qlt=60&crop={42.35%},{24.95%},{40.95%},{61.4%}",
      buttonText: "Up to 50% off select diamond styles",
    },
    {
      href: "https://us.pandora.net/en/create-a-custom-charm-bracelet/#contentID=5ce3aea8-6e28-4621-9b13-3e7a85d2b31f&type=Mega Spotter&name=12/25 EOSS Megaspotter US",
      title: "Custom Charm Bracelets",
      imgSrc: "//cdn.media.amplience.net/i/pandora/q424%20star%20product?fmt=auto&qlt=60&crop={22.8%},{19.55%},{52.05%},{78.1%}",
      buttonText: "Custom Charm Bracelets",
    },
    {
      href: "https://us.pandora.net/en/collections/disney/#contentID=5ce3aea8-6e28-4621-9b13-3e7a85d2b31f&type=Mega Spotter&name=12/25 EOSS Megaspotter US",
      title: "Disney x Pandora",
      imgSrc: "//cdn.media.amplience.net/i/pandora/Disney_Megaspotter?fmt=auto&qlt=60&crop={0.39%},{34.9%},{92.01%},{51.47%}",
      buttonText: "Disney x Pandora",
    },
    {
      href: "https://us.pandora.net/en/rings/rings/promise-rings/#contentID=5ce3aea8-6e28-4621-9b13-3e7a85d2b31f&type=Mega Spotter&name=12/25 EOSS Megaspotter US",
      title: "Heart & Promise Rings",
      imgSrc: "//cdn.media.amplience.net/i/pandora/Q424_Holiday_Hands_05_RGB?fmt=auto&qlt=60&crop={11.1%},{9.05%},{61.6%},{61.6%}",
      buttonText: "Heart & Promise Rings",
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-left text-2xl font-bold mb-6">For Every Special Moment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="kanban-card bg-gray-100 hover:bg-gray-200 transition rounded-lg shadow-lg overflow-hidden"
            >
              <a href={item.href} title={item.title} className="block">
                <div className="relative">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4">
                  <button className="text-black text-lg font-medium underline">
                    {item.buttonText}
                  </button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaSpotterKanban;
