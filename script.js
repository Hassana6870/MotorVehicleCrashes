var question = prompt("What would you like to know about motor vehicle collisons? Type in (YEAR-MONTH-DAY) XXXX-XX-XX.(Enter a date from 2020-06-04 and 2020-06-13)")
// I could only do a few days because the dataset had a limited amount of days and space.
$.ajax({ // This is my first time learning Jquery, and I struggled a lot with using it properly.
    dataType: 'json',
    url: 'https://data.cityofnewyork.us/resource/h9gi-nx95.json', // The dataset I chose
    success: function(info) {
        for (var i = 0; i < info.length; i++) { // The basic loop
            if (info[i].crash_date == (question + "T00:00:00.000")){ // The time was weird and it always had these numbers at the end of the dates
                var injured = (info[i].number_of_persons_injured); // How many were injured that day
                var killed = (info[i].number_of_persons_killed); // How many were killed that day
                var id = (info[i].collision_id); // The specific incident
                var where = (info[i].on_street_name); // What street this incident occured
                document.write(injured + " persons injured and " + killed + " persons killed at " + where + " id number:" + id);
                document.write("<br>"); // It took me an hour to figure out how I would skip lines with each incident.
            }}}
    });

// It took me some time to learn Jquery and use it properly. I had no prior experience with Jquery, and this project helped me use it in the future
// It may seem obvious, but I forgot that I needed to connect the script with the html, so while I was trying to run the code, I ran into trouble with get the script to work.
