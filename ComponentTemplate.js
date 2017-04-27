import React from "react";

// const fs = require('fs');
// const gm = require('google-static-map').set('google-console-api-key');
// const stream = gm().address('Apple Store, 5th Avenue, New York').staticMap().done();
// const image = stream.pipe(fs.createWriteStream('test.png'));

const DataCardImage = (props) => {
    return (
        <div className="card-image">
            <img src="#" alt="google map"/>
            <span className="card-title">{props.meetingName}</span>
        </div>
    );
}

export default DataCardImage

