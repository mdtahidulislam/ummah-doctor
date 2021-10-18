import React from 'react';

const TruncateWord = ({ content, noWord }) => {
    let trunckedWord = '';
    const truncWord = (content, noWord) => {
        trunckedWord = content.split(" ").splice(0, noWord).join(" ");
        return trunckedWord;
    }
    truncWord(content, noWord);
    return (
        <p className="text-center">
            {trunckedWord + " ....."}
        </p>
    );
};

export default TruncateWord;