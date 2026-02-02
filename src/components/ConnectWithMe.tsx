import { Youtube, Instagram, Linkedin, Facebook, Mic } from 'lucide-react';

const socialLinks = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@stackmodechris',
    icon: Youtube,
    color: 'red-500',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/stackmodechris_',
    icon: Instagram,
    color: 'pink-500',
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@stackmodechris___',
    customIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-cyan-400">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
    color: 'cyan-400',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/17cn4N587n/?mibextid=wwXIfr',
    icon: Facebook,
    color: 'blue-600',
  },
  {
    name: 'X (Twitter)',
    href: 'https://twitter.com/stackmodechris',
    customIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-foreground">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'foreground',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christopher-robinson-119a01234/',
    icon: Linkedin,
    color: 'blue-500',
  },
  {
    name: 'Pinterest',
    href: 'https://www.pinterest.com/stackmodechris/',
    customIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
        <path d="M12 0a12 12 0 0 0-4.373 23.178c-.07-.937-.134-2.377.028-3.401.146-.927.943-3.996.943-3.996s-.24-.482-.24-1.193c0-1.116.647-1.949 1.452-1.949.685 0 1.016.514 1.016 1.131 0 .69-.439 1.72-.666 2.677-.189.8.401 1.452 1.189 1.452 1.427 0 2.524-1.505 2.524-3.676 0-1.922-1.381-3.266-3.353-3.266-2.284 0-3.625 1.713-3.625 3.484 0 .69.265 1.429.596 1.832a.24.24 0 0 1 .056.23c-.061.253-.197.8-.224.912-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12 12 0 1 0 12 0z" />
      </svg>
    ),
    color: 'red-600',
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/5zYWSWGMYm',
    customIcon: (
      <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
    color: 'indigo-500',
  },
  {
    name: 'Snapchat',
    href: 'https://www.snapchat.com/@stackmodechris?sender_web_id=0f0a0675-51d4-4c57-8b1b-8952e934eb8f&device_type=desktop&is_copy_url=true',
    customIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6 text-yellow-400">
        <path d="M496.926,366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.753-45.266a117.104,117.104,0,0,1-9.369-16.037c-1.128-2.678-.545-4.323-.087-5.21,1.128-2.071,3.2-3.9,6.3-5.6a62.8,62.8,0,0,1,7.816-3.769c1.376-.595,2.8-1.177,4.242-1.809a43.926,43.926,0,0,0,16.334-12.545,25.478,25.478,0,0,0,4.833-19.525c-1.461-8.645-7.912-15.727-17.3-18.949a34.477,34.477,0,0,0-11.145-1.9c-5.9.012-13.073,2.281-24.887,6.3l-.124.037c-.755.261-1.51.521-2.217.793a13.155,13.155,0,0,1-4.1.9,3.887,3.887,0,0,1-2.281-.483c-.037-1.054-.1-2.145-.161-3.286-.422-8.509-.942-19.072-1.413-27.789-.9-16.434-2.057-37.013-8.97-56.6-7.513-21.3-19.091-39.067-34.4-52.753C313.507,55.038,280.322,42.712,244.6,42.712h-1.461c-35.5.261-68.535,12.489-93.007,34.447-15.344,13.774-26.97,31.584-34.533,52.957-6.912,19.525-8.008,40.067-8.856,56.488-.459,8.731-.967,19.331-1.389,27.852-.05,1.017-.112,2.008-.149,2.962a6.024,6.024,0,0,1-3.695,1.079,20.063,20.063,0,0,1-5.451-1.177c-2.53-.868-5.048-1.747-7.566-2.468a35.251,35.251,0,0,0-10.218-1.686c-10.392.261-19.424,5.66-23.566,14.145a25.018,25.018,0,0,0,.558,23.739c4.869,9.05,14.632,15.727,25.209,19.748.657.249,1.363.509,2.094.768a82.167,82.167,0,0,1,10.119,4.261c3.657,1.985,5.413,3.819,5.612,4.584.1.422.459,2.654-1.128,6.114-9.332,19.946-24.479,37.4-45.018,51.9-10.962,7.727-22.372,13.662-33.96,17.642-5.711,1.972-14.12,4.236-16.717,11.8a21.074,21.074,0,0,0,1.054,15.9c5.426,11.145,19.424,17.6,27.079,20.523a134.358,134.358,0,0,0,13.823,4.081,18.529,18.529,0,0,1,3.224,1.128c1.871,1.3,2.654,5.077,3.361,8.521a50.09,50.09,0,0,0,2.8,10.1c2.926,6.764,7.988,10.466,14.269,10.466a31.5,31.5,0,0,0,9.071-1.649c6.714-2.12,12.955-3.2,19.1-3.2a60.981,60.981,0,0,1,11.145,1.017,81.389,81.389,0,0,1,16.334,5.077c14.939,6.478,26.946,9.83,38.9,10.837,1.376.112,2.8.174,4.273.174,12.6,0,24.578-4.273,36.655-13.078a78.2,78.2,0,0,1,45.68-15.3,79.931,79.931,0,0,1,46.147,15.517,49.631,49.631,0,0,0,29.3,10.739c1.177,0,2.342-.05,3.508-.149,11.95-1.017,23.963-4.37,38.911-10.862a79.668,79.668,0,0,1,27.5-6.064,60.239,60.239,0,0,1,11.12,1.017c6.19,1.128,12.483,3.348,19.227,6.8a30.128,30.128,0,0,0,12.632,3.063c9.381,0,15.652-6.279,18.454-12.967a51.463,51.463,0,0,0,2.926-10.516c.694-3.373,1.413-6.875,3.125-8.089a15.227,15.227,0,0,1,3.138-1.1,119.779,119.779,0,0,0,13.115-3.794c6.577-2.417,23.566-8.707,29.412-21.762A21.4,21.4,0,0,0,496.926,366.6Z"/>
      </svg>
    ),
    color: 'yellow-400',
  },
  {
    name: 'Podcast',
    href: 'https://rss.com/podcasts/the-stackmode-network-with-stackmodechris-stackmodenet/?listen-on=true',
    icon: Mic,
    color: 'green-500',
  },
];

interface ConnectWithMeProps {
  showBlessing?: boolean;
}

export const ConnectWithMe = ({ showBlessing = false }: ConnectWithMeProps) => {
  return (
    <div className="max-w-4xl mx-auto mb-16 px-4">
      <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
        Connect With Me
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          const colorClasses = {
            'red-500': 'hover:border-red-500/50 bg-red-500/10 group-hover:bg-red-500/20 text-red-500',
            'pink-500': 'hover:border-pink-500/50 bg-pink-500/10 group-hover:bg-pink-500/20 text-pink-500',
            'cyan-400': 'hover:border-cyan-400/50 bg-cyan-400/10 group-hover:bg-cyan-400/20 text-cyan-400',
            'blue-600': 'hover:border-blue-600/50 bg-blue-600/10 group-hover:bg-blue-600/20 text-blue-600',
            'blue-500': 'hover:border-blue-500/50 bg-blue-500/10 group-hover:bg-blue-500/20 text-blue-500',
            'red-600': 'hover:border-red-600/50 bg-red-600/10 group-hover:bg-red-600/20 text-red-600',
            'indigo-500': 'hover:border-indigo-500/50 bg-indigo-500/10 group-hover:bg-indigo-500/20 text-indigo-500',
            'green-500': 'hover:border-green-500/50 bg-green-500/10 group-hover:bg-green-500/20 text-green-500',
            'yellow-400': 'hover:border-yellow-400/50 bg-yellow-400/10 group-hover:bg-yellow-400/20 text-yellow-400',
            'foreground': 'hover:border-foreground/50 bg-foreground/10 group-hover:bg-foreground/20 text-foreground',
          };
          
          const colors = colorClasses[social.color as keyof typeof colorClasses] || colorClasses['foreground'];
          const [hoverBorder, bgColor, hoverBg, textColor] = colors.split(' ');

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center gap-3 bg-card/50 border border-border ${hoverBorder} rounded-xl p-5 transition-all hover:bg-card/80 hover:scale-105 group min-h-[120px]`}
            >
              <div className={`w-12 h-12 rounded-full ${bgColor} ${hoverBg} flex items-center justify-center transition-colors`}>
                {social.customIcon ? (
                  social.customIcon
                ) : IconComponent ? (
                  <IconComponent size={24} className={textColor} />
                ) : null}
              </div>
              <span className="text-foreground font-medium text-sm">{social.name}</span>
            </a>
          );
        })}
      </div>
      
      {showBlessing && (
        <p className="text-2xl md:text-3xl font-bold text-foreground text-center mt-10">
          May God Bless You And Your Loved Ones!
        </p>
      )}
    </div>
  );
};
