function act() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

links = [
    {
        title : "Girls in Tech Expo Event",
        date : new Date(2026,2,26),
        img : ["images/git.jpg"],
        link : "git",
        site : null
    },
    {
        title : '“Genesis” Game Jam',
        date : new Date(2026,2,19),
        img : ["images/genesis1.png","images/genesis2.jpg","images/genesis3.png"],
        link : "genesis",
        site : "https://laieney.itch.io/genesis"
    },
    {
        title : "AUMS/CS Club Industry Night",
        date : new Date(2026,3,10),
        img : ["images/industry1.jpg","images/industry2.jpg","images/industry3.jpg"],
        link : "industry",
        site : "https://www.instagram.com/p/DUm8VnJEtRJ/"
    },
    {
        title : "AllUni Programming Competition",
        date : new Date(2026,5,23),
        img : ["images/alluni1.jpg","images/alluni2.jpg"],
        link : "alluni",
        site : "https://alluni.io/contest/2026diva"
    },
    {
        title : "TFA Educational inequality workshop ",
        date : new Date(2026,5,7),
        img : ["images/tfa1.jpg","images/tfa2.jpg"],
        link : "tfa",
        site : null
    },
    {
        title : "Joey Scouts",
        date : null,
        img : ["images/joeys2.jpg","images/joeys1.jpg","images/joeys3.jpg"],
        link : "joeys",
        site : null
    },
    {
        title : "Advent of Code 2023",
        date : new Date(2026,4,16),
        img : ["images/aoc1.jpg","images/aoc2.png"],
        link : "aoc",
        site : "https://adventofcode.com/2023"
    },
    {
        title : "Crack the Cyber Case, an interactive Whodunnit workshop",
        date : new Date(2026,3,4),
        img : ["images/whodunnit1.jpg","images/whodunnit2.jpg","images/whodunnit3.jpg"],
        link : "whodunnit",
        site : "https://www.careerhub.adelaideuni.edu.au/students/events/detail/461981"
    },
    {
        title : "Internship information session ",
        date : new Date(2026,5,18),
        img : ["images/info.jpg"],
        link : "info",
        site : null
    },
    {
        title : "LinkedIn professional photo",
        date : new Date(2026,3,5),
        img : ["images/photo.jpg"],
        link : "photo",
        site : "https://www.careerhub.adelaideuni.edu.au/students/events/detail/461937"
    },
    {
        title : "Makerspace Adelaide",
        date : null,
        img : ["images/makerspace1.png","images/makerspace2.png","images/makerspace3.png"],
        link : "makerspace",
        site : "https://makerspaceadelaide.org/"
    },
    {
        title : "100 Factorial",
        date : null,
        img : ["images/factorial1.jpg","images/factorial2.png"],
        link : "factorial",
        site : null
    },
    {
        title : "Portfolio Website",
        date : new Date(2026,3,2),
        img : ["images/portfolio1.png","images/portfolio2.png","images/portfolio3.png"],
        link : "website",
        site : ""
    },
    {
        title : "The Other Pure Seminar (TOPS)",
        date : new Date(2026,5,26),
        img : ["images/tops1.jpg","images/tops2.jpg"],
        link : "tops",
        site : null
    },
        {
        title : "Finding Casual Work",
        date : new Date(2026,3,16),
        img : ["images/work2.png","images/work1.png"],
        link : "casual",
        site : "https://www.careerhub.adelaideuni.edu.au/students/events/detail/461957"
    },
    {
        title : "CS Club Quiz Night",
        date : new Date(2026,4,10),
        img : ["https://images.humanitix.com/i/def09601-1210-45c4-9413-057afb944655.png@responsive-2000.webp"],
        link : "quiz",
        site : "https://events.humanitix.com/cs-club-x-eeesau-quiz-night-gf5xm8we"
    }
]

a = false;

function valueofdate(d) {
    if (d) { return d.getTime() }
    return 10000000000000000000000000000
}

function refresh() {
    document.querySelector(".links").innerHTML = '';

    if (document.querySelector("#sel").value == "a") {
        links.sort(function(a, b){return valueofdate(a.date) - valueofdate(b.date)});
        console.log('sorting by date')
    } else if (document.querySelector("#sel").value == "b") {
        links.sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        });
        console.log('sorting by title')
    }

    if (document.querySelector("#sel2").value == "rev") {
        links.reverse()
    }
    
    for (x of links) {
        da = "Ongoing"

        if (x.date) {
            da = `${x.date.getDate()}.${x.date.getMonth()}.${x.date.getFullYear()}`
        }

        document.querySelector(".links").innerHTML += `
        <a href="activity.html?a=${x.link}"><div class="link ${a ? "accessible" : ""}" style="background-image: url(${x.img[0]});">
            <div>
                <h1>${x.title}</h1>
                <p>${da}</p>
            </div>
        </div></a>
        `
    }

    l = document.getElementsByClassName('link')

    for (x = 0; x < l.length; x++) {
        l[x].style.animationDelay = x / 10 + 's'
        l[x].style.display = 'inline-block'
    }
}

function img() {
    a = !a;
    console.log('hi')
    l = document.getElementsByClassName('link')

    for (x = 0; x < l.length; x++) {
        l[x].classList.toggle('accessible')
    }
}

function apply() {
    months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    urlParams = new URLSearchParams(window.location.search);
    a = urlParams.get('a');

    data = 0

    for (x of links) {
        if (x.link == a) data = x
    }

    if (data == 0) { 
        window.location.href = "index.html"
        console.log('uhh')
    }

    date = "Ongoing"

    if (data.date) {
        date = `${data.date.getDate()} ${months[data.date.getMonth()-1]} ${data.date.getFullYear()}`
    }

    document.querySelector("#title").innerHTML = data.title
    document.querySelector("#title2").innerHTML = data.title
    document.querySelector("#img").src = data.img[0]
    document.querySelector("#date").innerHTML = date

    if (data.img.length == 1) {
        document.querySelector("#nextImg").style.display = 'none'
    }

    if (!data.site) document.querySelector("#explore").style.display = 'none'
    document.querySelector("#explore").href = data.site

    fetch("pages/"+data.link+".txt")
    .then(response => response.text())
    .then(text => {
        document.querySelector("#text").innerHTML = "<p>" + text.replace(/\n/g, "</p><p>") + "</p>"
    })
    .catch(error => {
        document.querySelector("#text").innerHTML = "<p>An error occurred.</p>"
    });

}

k=0

function nextImg() {
    urlParams = new URLSearchParams(window.location.search);
    a = urlParams.get('a');

    data = 0

    for (x of links) {
        if (x.link == a) data = x
    }

    k++

    document.querySelector('#img').style.display = 'none' 
    void document.querySelector('#img').offsetWidth;
    document.querySelector('#img').src = data.img[k%data.img.length];
    document.querySelector('#img').style.display = 'inline-block'

}