import React from 'react';
import TagSlider from './TagSlider';

const Tags = ({tag,setTag}) => {
    return (
        <div>
             <div className="flex gap-1  my-2">
        
        
      </div>
      <div className='my-3'>
      <TagSlider tag={tag} setTag={setTag} />
      </div>
        </div>
    );
};

export default Tags;