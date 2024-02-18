import React from 'react';
import EmailForm from './emailform'; // 경로는 실제 프로젝트 구조에 따라 달라질 수 있습니다.

const Page: React.FC = () => {
  return (
    <div>
      <EmailForm /> {/* 이메일 폼 컴포넌트 사용 */}
    </div>
  );
};

export default Page;