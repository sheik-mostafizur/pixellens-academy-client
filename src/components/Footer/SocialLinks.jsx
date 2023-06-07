const SocialLinks = () => {
  const socialData = [
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      url: "https://www.facebook.com/example",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "https://www.twitter.com/example",
      img_url: "https://img.freepik.com/free-icon/twitter_318-674515.jpg",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/example",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    },
    // Add more social links as needed
  ];

  return (
    <div className="flex space-x-4">
      {socialData.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700">
          <p className={`text-xl ${social.icon}`} aria-hidden="true"></p>
          <img className="w-8" src={social.img_url} alt={social.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
