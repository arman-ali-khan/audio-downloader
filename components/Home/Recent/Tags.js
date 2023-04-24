import React from 'react';
import TagSlider from './TagSlider';

const Tags = ({tag,setTag}) => {
    return (
        <div>
             <div className="flex gap-1  my-2">
        
        
      </div>
      <TagSlider tag={tag} setTag={setTag} />
        </div>
    );
};

export default Tags;