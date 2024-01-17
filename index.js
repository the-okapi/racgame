let file = { 
    "data": [
        {
            "text": "You see a random capybara",
            "yes": {
                "text": "You pet the capybara",
                "page": 1,
                "ending": [false, null]
            },
            "no": {
                "text": "You leave",
                "page": 2,
                "ending": [
                    true,
                    "You are a weird person"
                ]
            }
        },
        {
            "text": "You see a grandma trying to cross the road",
            "yes": {
                "text": "You help her",
                "page": 3,
                "ending": [false, null]
            },
            "no": {
                "text": "You leave",
                "page": 4,
                "ending": [false, null]
            }
        },
        {
            "text": "You see a random person",
            "yes": {
                "text": "You push them down into the road",
                "page": null,
                "ending": [
                    true,
                    "You are a bad person"
                ]
            },
            "no": {
                "text": "You leave",
                "page": 3,
                "ending": [false, null]
            }
        },
        {
            "text": "You are in jail for 1 year",
            "yes": {
                "text": "You escape",
                "page": null,
                "ending": [
                    true,
                    "You are a criminal"
                ]
            },
            "no": {
                "text": "You wait out your sentence",
                "page": 4,
                "ending": [false, null]
            }
        },
        {
            "text": "Someone pushes you into the road",
            "yes": {
                "text": "You leave",
                "page": null,
                "ending": [
                    true,
                    "You are a good person"
                ]
            },
            "no": {
                "text": "You retaliate",
                "page": null,
                "ending": [
                    true,
                    "You could use some anger management training"
                ]
            }
        }
    ]
};
let p = document.getElementById("p");
let fns = {
    yb: document.getElementById("yb"),
    nb: document.getElementById("nb"),
    start: document.getElementById("start"),
    restart: document.getElementById("restart"),
};

fns.yb.addEventListener("click", yes);
fns.nb.addEventListener("click", no);
fns.start.addEventListener("click", start);
fns.restart.addEventListener("click", restart);

let cnum = 0;
let data = file.data;
let question = data[cnum];
p.innerHTML = question.text;
fns.yb.innerHTML = question.yes.text;
fns.nb.innerHTML = question.no.text;

function start() {
    fns.start.hidden = true;
    fns.yb.hidden = false;
    fns.nb.hidden = false;
    p.hidden = false;
    
}

function yes() {
    if (question.yes.ending[0]) {
        end(question.yes.ending[1]);
    } else {
        cnum = question.yes.page;
        question = data[cnum];
        p.innerHTML = question.text;
        fns.yb.innerHTML = question.yes.text;
        fns.nb.innerHTML = question.no.text;
    }
}

function no() {
    if (question.no.ending[0]) {
        end(question.no.ending[1]);
    } else {
        cnum = question.no.page;
        question = data[cnum];
        p.innerHTML = question.text;
        fns.yb.innerHTML = question.yes.text;
        fns.nb.innerHTML = question.no.text;
    }
}

function end(txt) {
    fns.yb.hidden = true;
    fns.nb.hidden = true;
    fns.restart.hidden = false;
    p.innerHTML = txt;
}

function restart() {
    window.location.reload();
}