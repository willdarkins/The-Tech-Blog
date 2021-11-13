module.exports = {
// Makes dates more readable for each post
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
//Creates plural option to count each comment
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    }
}