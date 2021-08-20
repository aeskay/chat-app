import React from 'react'

export default function MyMessage({message}) {

    if (message.attachments && message.attachments.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt = "message - attachment"
                className = "message - image"
                style = {{float: 'right'}}
            />
        );
    } 

    function strip(html){
        let doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
     }
    return (
        <div className="message" style={{float: 'right', marginRight: '10px', color: "white", backgroundColor: '#3B2A50'}}>
            {strip(message.text)}
        </div>
    )
}
