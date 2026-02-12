import React from 'react';
import { HeartIcon, ShareIcon } from './Icons/Card-icons';

interface CardActionsProps {
  liked: boolean;
  onToggleLike?: () => void;
  onShare?: () => void;
}

const CardActions: React.FC<CardActionsProps> = ({
  liked,
  onToggleLike,
  onShare,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        className={`p-1.5 rounded-full hover:bg-gray-100 transition-colors ${
          liked ? 'text-purple' : 'text-gray-400'
        }`}
        aria-pressed={liked}
        aria-label={liked ? 'Unlike job' : 'Like job'}
        onClick={onToggleLike}
      >
        <HeartIcon
          className="w-5 h-5"
          fill={liked ? 'currentColor' : 'none'}
          stroke="currentColor"
        />
      </button>

      <button
        className="p-1.5 rounded-full text-gray-400 hover:bg-gray-100 transition-colors"
        aria-label="Share job"
        onClick={onShare}
      >
        <ShareIcon className="w-5 h-5" stroke="currentColor" />
      </button>
    </div>
  );
};

export default CardActions;
