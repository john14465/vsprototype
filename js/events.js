fetch('events.json')
    .then((res) => res.json())
    .then((data) => {
        // Variables
        const event = data;
        const noEventClass = document.querySelector('.no-event');
        const validEvent = document.getElementById('valid-events');
        const d = new Date();
        const currentMonth = d.getMonth();
        const currentYear = d.getFullYear();
        const currentYearEvents = event.filter((events) => {
            return events.year >= currentYear;
        })
        const upcomingEvents = currentYearEvents.filter((events) => {
            return events.month >= currentMonth + 1;
        })
        let eventPage = ``
        // algorithm
        if (upcomingEvents.length >= 1) {
            noEventClass.style.display = "none";
            upcomingEvents.forEach(renderEvent => {
                eventPage += `
                <div class="card">
                    <img src="img/${renderEvent.photo}" alt="Event Photo">
                    <h3>${renderEvent.title}</h3>
                    <hr>
                    <p>${renderEvent.monthtitle} ${renderEvent.day}, ${renderEvent.year}</p>
                    <p>Hosted by: ${renderEvent.host}</p>
                    <button class="action-btn"><a href="${renderEvent.link}">Details</a></button>
                </div> `
                validEvent.innerHTML = eventPage
            }); 
            
        } else {
                noEventClass.display = "Block"
                
            }
    })