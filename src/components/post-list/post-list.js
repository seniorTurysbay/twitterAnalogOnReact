import React from 'react';
import PostListItem from '../post-list-item'
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const{id,...itemProps} = item;
        // itemProps это весь остальной объект который не включает в себя id

        return(
            <li key={id} className="list-group-item">
                 {/* <PostListItem label={item.label} important={item.important}/> */}
                 {/* using spread operator */}
                 <PostListItem{...itemProps}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default PostList;
