import React from 'react';

interface ContentBodyProps {
  className?: string;
}

const ContentBody: React.FC<ContentBodyProps> = ({ className }) => {
  return (
    <div className={`flex-1 relative overflow-hidden ${className || ''}`}>
      聊天内容
    </div>
  );
};

export default ContentBody;