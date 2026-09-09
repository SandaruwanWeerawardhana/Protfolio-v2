'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '../../lib/cn';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  width?: number;
  height?: number;
  /** Skip lazy loading for above-the-fold images. */
  priority?: boolean;
  sizes?: string;
}

/**
 * Image with a shimmer placeholder and a graceful failure state.
 * Non-priority images are lazy loaded and decoded off the main thread.
 */
export function OptimizedImage({
  src,
  alt,
  className,
  wrapperClassName,
  width = 800,
  height = 500,
  priority = false,
  sizes,
}: OptimizedImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className={cn('relative overflow-hidden bg-white/[0.04]', wrapperClassName)}>
      {status === 'loading' ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.02),rgba(255,255,255,0.08),rgba(255,255,255,0.02))] bg-[length:200%_100%]"
        />
      ) : null}

      {status === 'error' ? (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-content-subtle">
          Image unavailable
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={cn(
            'transition-opacity duration-500 ease-out',
            status === 'loaded' ? 'opacity-100' : 'opacity-0',
            className,
          )}
        />
      )}
    </div>
  );
}

export default OptimizedImage;
