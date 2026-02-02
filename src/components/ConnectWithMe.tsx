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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
        <path d="M12.166 3c.796 0 3.495.223 4.769 3.073.426.954.323 2.582.239 3.896l-.012.18c-.022.332-.043.647-.043.876 0 .259.1.448.297.562.418.24.893.363 1.058.408.428.116.727.263.915.449.26.258.324.563.277.82-.108.586-.792.857-1.106.956-.066.021-.127.04-.179.058-.437.145-.544.246-.57.348-.033.125.008.27.066.455.32.94.86 1.94 1.682 2.678.45.404.984.735 1.585.985.21.087.401.208.455.463.073.347-.176.68-.746.998-.705.393-1.595.583-2.108.687a1.633 1.633 0 0 0-.196.05c-.222.083-.255.227-.3.42-.024.1-.05.21-.095.335-.093.257-.24.377-.566.377a3.502 3.502 0 0 1-.62-.082c-.52-.097-1.166-.22-1.96-.22-.754 0-1.352.108-1.83.204-.328.066-.611.122-.864.122-.324 0-.474-.115-.56-.351-.048-.13-.075-.243-.099-.347-.044-.194-.078-.335-.295-.416a1.86 1.86 0 0 0-.213-.055c-.509-.105-1.39-.293-2.088-.68-.576-.321-.833-.654-.766-.993.05-.253.237-.375.445-.461.604-.252 1.14-.585 1.594-.992.82-.734 1.362-1.737 1.681-2.677.06-.186.1-.33.067-.456-.027-.102-.134-.203-.571-.348a4.15 4.15 0 0 1-.18-.058c-.303-.097-.982-.362-1.099-.941-.05-.249.012-.558.276-.821.19-.19.491-.337.918-.454.164-.044.638-.168 1.057-.407.187-.109.286-.292.29-.551.003-.238-.02-.563-.044-.903l-.011-.173c-.08-1.253-.182-2.882.244-3.838C8.63 3.256 11.302 3 12.166 3z" />
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
