import type { ImageLoaderProps } from 'next/image';

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${src}${width ? `?w=${width}` : ''}${
    quality ? `&q=${quality}` : ''
  }`;
}