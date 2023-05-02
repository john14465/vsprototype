fetch('events.json')
    .then((res) => res.json())
    .then((data) => {
        // Variables
        const event = data;
        const noEventClass = document.querySelector('.no-event');
        const homePageEvents = document.getElementById('home-events');
        const d = new Date();
        const currentMonth = d.getMonth();
        const currentYear = d.getFullYear();
        const currentYearEvents = event.filter((events) => {
            return events.year >= currentYear;
        })
        const upcomingEvents = currentYearEvents.filter((events) => {
            return events.month >= currentMonth + 1;
        })
        let homeEvents = ``

        // algorithm
        if (upcomingEvents.length >= 1) {
            noEventClass.style.display = "none";
            upcomingEvents.forEach(renderEvent => {
                homeEvents += `
                <div class="event-box">
                    <p>${renderEvent.monthtitle} ${renderEvent.day}, ${renderEvent.year}</p>
                    <h3>${renderEvent.title}</h3>
                    <hr>
                </div>`
                    homePageEvents.innerHTML = homeEvents
            }); 
            
        } else {
                noEventClass.display = "Block"
                
            }
    })