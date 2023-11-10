/* eslint-disable @next/next/no-img-element */
import { Nunito } from 'next/font/google';
import { ImageResponse } from 'next/server';
import Logo from '@/../assets/logo-footer.png';
import Sphere from '@/../assets/mainpage-sphere.png';

export const runtime = 'edge';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'], variable: '--font-nunito' });

export async function GET() {
  console.log(`http://localhost:3000${Logo.src}`);
  return new ImageResponse(
    (
      <div
        className={`${nunito.className}`}
        style={{
          position: 'relative',
          background: '#D1EAF9',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <img
          alt="test"
          style={{
            display: 'block',
            position: 'absolute',
            top: '-200px',
            left: '-200px',
          }}
          src={`http://localhost:3000${Sphere.src}`}
          width={530}
          height={530}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
            paddingRight: '48px',
          }}>
          <img
            alt="test"
            style={{ display: 'block' }}
            src={`http://localhost:3000${Logo.src}`}
            width={160}
            height={84}
          />
          <p style={{ fontSize: 48, fontFamily: 'Inter', fontWeight: '800' }}>
            | SOFTWARE DEVELOPMENT
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 400,
    }
  );
}
