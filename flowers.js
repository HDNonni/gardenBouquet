// function startMenu(starts) {
//     //added Object .values to see page otherwise use an array of starts
//     for (const start of Object.values(starts)) {
//         console.log("Starts Item", start);


//         $('#main').append(`
//                 <div>
//                     <ul>
//                         <div class = "name">
//                             <li>${start.name}</li>
//                                 <a href ="#" class = "tooltip">
//                                     <img src = "${start.imageURL}" title = "${start.imageTitle}" alt = "${start.imageAlt}"/>
//                                     <span>${start.decscription}</span>
//                                 <a>
//                                 <ul>
//                                     <li>${start.price}</li>
//                                 </ul>
//                             </li>
//                         </div>
//                     </ul>
//                 </div>
//             `);
//     }
// }



// $(document).ready(function () {
//     //url: have to use browser sync
//     //const url = 'http://localhost:3000/Restaurant/menu/starts.json';
//     //change to a relative url so it can be viewed
//     const url = "starts.json";
//     //ajax call to url , what kind of data type and GET method
//     $.ajax(url, {
//         dataType: 'json',
//         method: 'GET'
//     }).done(function (data, textStatus) {
//         //log to check for success
//         console.log('Data: ', data);
//         console.log('Text Status:', textStatus);
//         const starts = data;
//         //use function calls and passing in parameter that are required  
//         startMenu(starts);
//     });



// });