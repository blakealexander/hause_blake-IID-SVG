new WOW().init();

// (() => {
//     function getData(target) {
//         // run a fetch call to the DB and get the data that goes with this graphic
//         let url = `./includes/connect.php?label=${target}`;

//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             parseData(data[0]);
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
//     }

//     function parseData(label) {
//         // recieve, parse, update page
//         const labelName = label;
        
//         //debugger;
//         // get the elements and update them
//         // document.querySelector(#....) etc... refer to the car example from Week 8

//         console.log(labelName);

//     }
//     // event handling
//     // topEl.addEventListener("mouseover", function() {
//     //     runAnimation(this.querySelector('.svg-graphic'), ["lStar", "rStar"]);
//     // });
// })();