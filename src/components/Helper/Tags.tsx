import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

interface TagsProps {
  tags: string[];
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
      {children}
    </span>
  );
};

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className="flex items-center flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </div>
  );
};

export { Tag, Tags };
export default Tags;
