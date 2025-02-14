'use client';

import { useRouter } from 'next/navigation';
import Main from '@/app/(beforeLogin)/_component/Main';
import { useEffect } from 'react';

export default function Login() {
  const router = useRouter();

  // 렌더링 중  router.replace X -> useEffect 처리
  useEffect(() => {
    router.replace('/i/flow/login');
  }, [router]);

  return <Main />;
}
