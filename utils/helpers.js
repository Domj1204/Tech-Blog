module.exports = {
	// Purpose: To format the date in a more readable format
    format_date(date) {
      	return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    }
}