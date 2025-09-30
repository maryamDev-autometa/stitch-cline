'use client';

import { useRouter } from 'next/navigation';

interface UserAvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  clickable?: boolean;
}

export default function UserAvatar({ 
  src = "https://lh3.googleusercontent.com/aida-public/AB6AXuD3bssoYj_aWwS5YL4qzFcbbCpiwvWgdIzTZGe-enaBzC2Nvrt9xeSCcLgX0JL_AAhclQFKIMhZmN5iAi473cdcJTpPpPm92tuL2PI1k9DcArXjEkinM_sKRfAPSXCouC0vz3_QfGE2nXM_WfY0_32LQInezhZIBjUslUVEEL42R-L33njVrKwM6d41RFC3guMlqbSftHJsK-Ik0SUSbwMWal8mfFWfzDiEHLcIe7gq_XoklwtAVPxOCdeQ6xk4osTA84x7zvalRAE",
  alt = "User Avatar",
  size = 'md',
  className = '',
  clickable = true
}: UserAvatarProps) {
  const router = useRouter();

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const handleClick = () => {
    if (clickable) {
      router.push('/settings');
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      onClick={handleClick}
      className={`rounded-full bg-cover bg-center ${sizeClasses[size]} ${
        clickable ? 'cursor-pointer hover:ring-2 hover:ring-primary hover:ring-opacity-50 transition-all duration-200' : ''
      } ${className}`}
    />
  );
}
