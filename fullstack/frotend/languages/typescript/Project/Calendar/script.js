$(document).ready(function () {
    // Get current Date
    var today = new Date();

    // Get the first day of the current month
    var firstday = new Date(today.getFullYear(), today.getMonth(), 1);

    // Get the last day of the current month
    var lastday = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    // Get the day of the week for the first day
    var startingday = firstday.getDay();

    // Calculate the number of days in the month
    var monthday = lastday.getDate();

    // Create an array to store the names of the days
    var daysofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Display the days of the week
    for (var i = 0; i < 7; i++) {
        $('#calendar-days').append('<div class="day">' + daysofweek[i] + '</div>');
    }

    // Display the days of the month
    for (var i = 0; i < startingday; i++) {
        $('#calendar-days').append('<div class="day"></div>');
    }

    for (var i = 1; i <= monthday; i++) {
        var currentDate = new Date(today.getFullYear(), today.getMonth(), i);
        var classes = 'day';

        if (currentDate.toDateString() === today.toDateString()) {
            classes += ' current';
        }

        $('#calendar-days').append('<div class="' + classes + '">' + i + '</div>');
    }
});