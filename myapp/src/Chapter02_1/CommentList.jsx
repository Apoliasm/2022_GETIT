import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"abc",
        comment:"hello world",
    },
    {
        name:"xyz",
        comment:"안녕하세요"
    },
    {
        name:"syj",
        comment:"안뇽"
    },
]

function CommentList(props)
{
    return (
        <div>
            {comments.map((comment)=>{
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;