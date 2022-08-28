const output = document.getElementById('output');
const outside = document.getElementById("3");
const inside = document.getElementById("2");
let durometer = 76;

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.getAttribute('aria-pressed') == 'false') {
            //Test if outside or inside
            //If inside
            if (e.target.getAttribute('value') == 'inside') {
                //Make outside disabled
                outside.disabled = true;
            }
            else if (e.target.getAttribute('value') == 'outside') {
                //Make inside disabled
                inside.disabled = true;
            }
            //Change status to pressed
            e.target.setAttribute('aria-pressed', 'true');
            //Number operations
            var temp = Number(e.target.getAttribute('data-number'));
            durometer = durometer + temp;
            if (durometer <= 85) 
                output.innerHTML = durometer;
            else   
                output.innerHTML = "85";
        }
        else if (e.target.getAttribute('aria-pressed') == 'true') {
            //Check if inside or outside
            //If inside
            if (e.target.getAttribute('value') == 'inside') {
                //Remove disabled from outside
                outside.disabled = false;
            }
            else if (e.target.getAttribute('value') == 'outside') {
                //Remove disabled from inside
                inside.disabled = false;
            }
            e.target.setAttribute('aria-pressed', 'false');
            //output.innerText -= e.target.getAttribute('value');
            temp = Number(e.target.getAttribute('data-number'));
            durometer = durometer - temp;
            output.innerHTML = durometer; 
        }
        else {
            output.innerHTML("Error!");
        }
          
    });
}); 
